package ml.intellirn.api.controller;

import ml.intellirn.api.model.*;
import ml.intellirn.api.repository.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;

@CrossOrigin
@RestController
@Transactional
@RequestMapping("api/category")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    private List<Category> searchCategoryById(Long id) {
        Optional<Category> categoryOptional = this.categoryRepository.findById(id);

        if (categoryOptional.isPresent()) {
            List<Category> searchResults = new ArrayList<>();
            searchResults.add(categoryOptional.get());
            return searchResults;
        }

        else {
            return null;
        }
    }

    private List<Category> searchCategoryByCategoryUrl(List<Category> allCategories, String sT) {
        String searchTerm = sT.toLowerCase();
        List<Category> searchResults = new ArrayList<>();

        for (Category eachCategory : allCategories) {
            if (eachCategory.getCategoryUrl() != null
                    && eachCategory.getCategoryUrl().equalsIgnoreCase(searchTerm)) {
                searchResults.add(eachCategory);
            }
        }

        return searchResults;
    }

    private List<Category> searchCategoryByName(List<Category> allCategories, String sT) {
        String searchTerm = sT.toLowerCase();
        List<Category> searchResults = new ArrayList<>();

        for (Category eachCategory : allCategories) {
            if (eachCategory.getName() != null &&
                    eachCategory.getName().contains(searchTerm)) {
                searchResults.add(eachCategory);
            }
        }

        return searchResults;
    }

    @GetMapping(path = "{categoryId}")
    public ResponseEntity<?> getCategoryById(@PathVariable("categoryId") Long id) {
        List<Category> e = this.searchCategoryById(id);

        if (e == null) {
            String message = String.format("Category with ID %d not found", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            return ResponseEntity.status(HttpStatus.OK).body(e.get(0));
        }
    }

    @GetMapping()
    public ResponseEntity<?> searchCategories(@RequestParam(name = "searchBy", required = false) String searchBy,
            @RequestParam(name = "searchTerm", required = false) String searchTerm) {

        List<Category> allCategories = this.categoryRepository.findAll();

        if (searchBy == null || searchTerm == null) {
            return ResponseEntity.status(HttpStatus.OK).body(allCategories);
        }

        else if (searchBy.equals("") || searchTerm.equals("")) {
            return ResponseEntity.status(HttpStatus.OK).body(allCategories);
        }

        else if (searchBy.equalsIgnoreCase("categoryurl")) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(this.searchCategoryByCategoryUrl(allCategories, searchTerm));
        }

        else if (searchBy.equalsIgnoreCase("name")) {
            return ResponseEntity.status(HttpStatus.OK).body(this.searchCategoryByName(allCategories, searchTerm));
        }

        else {
            String message = "Invalid category search operation";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }
    }

    private boolean isCategoryUrlUnique(Category c) {
        boolean flag = true;
        String suppliedCategoryUrl = c.getCategoryUrl();

        if (suppliedCategoryUrl == null || suppliedCategoryUrl.equals("")) {
            flag = false;
        }

        else {
            List<Category> allCategories = this.categoryRepository.findAll();

            for (Category eachCategory : allCategories) {
                if (eachCategory.getCategoryId() == c.getCategoryId()) {
                    continue;
                }

                if (eachCategory.getCategoryUrl() != null
                        && eachCategory.getCategoryUrl().equalsIgnoreCase(suppliedCategoryUrl)) {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }

    private boolean isCategoryUrlValid(Category c) {
        String regex = "^[a-zA-Z0-9-_]+$";
        String suppliedCategoryUrl = c.getCategoryUrl();

        return suppliedCategoryUrl.matches(regex);
    }

    @PostMapping
    public ResponseEntity<?> addCategory(@RequestBody Category c) {
        c.setCategoryId(0L);

        if (this.isCategoryUrlValid(c)) {
            if (this.isCategoryUrlUnique(c)) {
                this.categoryRepository.save(c);

                String message = "Category added successfully";
                return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
            }

            else {
                String message = String.format("\"%s\" URL is already taken", c.getCategoryUrl());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }
        }

        else {
            String message = String.format("\"%s\" URL is not valid", c.getCategoryUrl());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }
    }

    @PutMapping(path = "{categoryId}")
    public ResponseEntity<?> updateCategory(@RequestBody Category c, @PathVariable("categoryId") Long categoryId) {
        Optional<Category> categoryOptional = this.categoryRepository.findById(categoryId);

        if (categoryOptional.isPresent()) {
            Category originalCategory = categoryOptional.get();
            c.setCategoryId(originalCategory.getCategoryId());

            if (this.isCategoryUrlValid(c)) {
                if (this.isCategoryUrlUnique(c)) {
                    this.categoryRepository.save(c);

                    String message = "Category updated successfully";
                    return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
                }

                else {
                    String message = String.format("\"%s\" URL is already taken", c.getCategoryUrl());
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
                }
            }

            else {
                String message = String.format("\"%s\" URL is not valid", c.getCategoryUrl());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }
        }

        else {
            String message = String.format("Category with ID %d not found", categoryId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }
    }

    @DeleteMapping(path = "{categoryId}")
    public ResponseEntity<?> deleteCategory(@PathVariable("categoryId") Long categoryId) {
        if (!this.categoryRepository.existsById(categoryId)) {
            String message = String.format("Category with ID %d not found", categoryId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            Category c = this.categoryRepository.getById(categoryId);

            if (c.getEducationList().size() > 0) {
                String message = String.format("Cannot delete category with existing articles", categoryId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }

            this.categoryRepository.deleteById(categoryId);
            String message = String.format("Category with ID %d deleted successfully", categoryId);
            return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
        }
    }
}
