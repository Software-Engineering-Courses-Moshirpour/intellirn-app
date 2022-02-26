package ml.intellirn.api.controller;

import ml.intellirn.api.model.*;
import ml.intellirn.api.repository.*;
import java.util.List;
import java.time.LocalDate;
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
@RequestMapping("api/survey")
public class SurveyController {
    @Autowired
    private SurveyRepository surveyRepository;

    @Autowired
    private QuestionRepository questionRepository;

    private List<Survey> searchSurveyById(Long id) {
        Optional<Survey> surveyOptional = this.surveyRepository.findById(id);

        if (surveyOptional.isPresent()) {
            List<Survey> searchResults = new ArrayList<>();
            searchResults.add(surveyOptional.get());
            return searchResults;
        }

        else {
            return null;
        }
    }

    private List<Survey> searchSurveyBySurveyUrl(List<Survey> allSurveys, String sT) {
        String searchTerm = sT.toLowerCase();
        List<Survey> searchResults = new ArrayList<>();

        for (Survey eachSurvey : allSurveys) {
            if (eachSurvey.getSurveyUrl() != null
                    && eachSurvey.getSurveyUrl().equalsIgnoreCase(searchTerm)) {
                searchResults.add(eachSurvey);
            }
        }

        return searchResults;
    }

    private List<Survey> searchSurveyByTitle(List<Survey> allSurveys, String sT) {
        String searchTerm = sT.toLowerCase();
        List<Survey> searchResults = new ArrayList<>();

        for (Survey eachSurvey : allSurveys) {
            if (eachSurvey.getTitle() != null && eachSurvey.getTitle().toLowerCase().contains(searchTerm)) {
                searchResults.add(eachSurvey);
            }
        }

        return searchResults;
    }

    @GetMapping(path = "{surveyId}")
    public ResponseEntity<?> getSurveyById(@PathVariable("surveyId") Long id) {
        List<Survey> b = this.searchSurveyById(id);

        if (b == null) {
            String message = String.format("Survey with ID %d not found", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            return ResponseEntity.status(HttpStatus.OK).body(b.get(0));
        }
    }

    @GetMapping()
    public ResponseEntity<?> searchSurvey(@RequestParam(name = "searchBy", required = false) String searchBy,
            @RequestParam(name = "searchTerm", required = false) String searchTerm) {

        List<Survey> allSurveys = this.surveyRepository.findAll();

        if (searchBy == null || searchTerm == null) {
            return ResponseEntity.status(HttpStatus.OK).body(allSurveys);
        }

        else if (searchBy.equals("") || searchTerm.equals("")) {
            return ResponseEntity.status(HttpStatus.OK).body(allSurveys);
        }

        else if (searchBy.equalsIgnoreCase("surveyurl")) {
            return ResponseEntity.status(HttpStatus.OK).body(this.searchSurveyBySurveyUrl(allSurveys, searchTerm));
        }

        else if (searchBy.equalsIgnoreCase("title")) {
            return ResponseEntity.status(HttpStatus.OK).body(this.searchSurveyByTitle(allSurveys, searchTerm));
        }

        else {
            String message = "Invalid survey search operation";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }
    }

    private boolean isSurveyUrlUnique(Survey s) {
        boolean flag = true;
        String suppliedSurveyUrl = s.getSurveyUrl();

        if (suppliedSurveyUrl == null || suppliedSurveyUrl.equals("")) {
            flag = false;
        }

        else {
            List<Survey> allSurveys = this.surveyRepository.findAll();

            for (Survey eachSurvey : allSurveys) {
                if (eachSurvey.getSurveyId() == s.getSurveyId()) {
                    continue;
                }

                if (eachSurvey.getSurveyUrl() != null
                        && eachSurvey.getSurveyUrl().equalsIgnoreCase(suppliedSurveyUrl)) {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }

    private boolean isSurveyUrlValid(Survey e) {
        String regex = "^[a-zA-Z0-9-_]+$";
        String suppliedSurveyUrl = e.getSurveyUrl();

        return suppliedSurveyUrl.matches(regex);
    }

    @PostMapping
    public ResponseEntity<?> addSurvey(@RequestBody Survey s) {
        s.setSurveyId(0L);
        s.setCreationDate(LocalDate.now());
        s.setLastUpdateDate(LocalDate.now());

        if (this.isSurveyUrlValid(s)) {
            if (this.isSurveyUrlUnique(s)) {
                List<Question> questionList = s.getQuestionList();

                // temporary removing question list
                s.setQuestionList(null);
                Survey savedSurvey = this.surveyRepository.save(s);

                for (Question q : questionList) {
                    q.setSurvey(savedSurvey);
                    this.questionRepository.save(q);
                }

                // setting question limit again
                savedSurvey.setQuestionList(questionList);
                this.surveyRepository.save(savedSurvey);

                String message = "Survey added successfully";
                return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
            }

            else {
                String message = String.format("\"%s\" URL is already taken", s.getSurveyUrl());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }
        }

        else {
            String message = String.format("\"%s\" URL is not valid", s.getSurveyUrl());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }
    }

    @PutMapping(path = "{surveyId}")
    public ResponseEntity<?> updateSurvey(@RequestBody Survey s, @PathVariable("surveyId") Long surveyId) {
        Optional<Survey> surveyOptional = this.surveyRepository.findById(surveyId);

        if (surveyOptional.isPresent()) {
            Survey originalSurvey = surveyOptional.get();
            s.setSurveyId(originalSurvey.getSurveyId());
            s.setCreationDate(originalSurvey.getCreationDate());

            if (this.isSurveyUrlValid(s)) {
                if (this.isSurveyUrlUnique(s)) {
                    s.setLastUpdateDate(LocalDate.now());

                    List<Question> questionList = s.getQuestionList();

                    // temporary removing question list
                    s.setQuestionList(null);
                    Survey savedSurvey = this.surveyRepository.save(s);

                    for (Question q : questionList) {
                        q.setSurvey(savedSurvey);
                        this.questionRepository.save(q);
                    }

                    // setting question limit again
                    savedSurvey.setQuestionList(questionList);
                    this.surveyRepository.save(savedSurvey);

                    String message = "Survey updated successfully";
                    return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
                }

                else {
                    String message = String.format("\"%s\" URL is already taken", s.getSurveyUrl());
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
                }
            }

            else {
                String message = String.format("\"%s\" URL is not valid", s.getSurveyUrl());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }
        }

        else {
            String message = String.format("Survey with ID %d not found", surveyId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }
    }

    @DeleteMapping(path = "{surveyId}")
    public ResponseEntity<?> deleteSurvey(@PathVariable("surveyId") Long surveyId) {
        if (!this.surveyRepository.existsById(surveyId)) {
            String message = String.format("Survey with ID %d not found", surveyId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            this.surveyRepository.deleteById(surveyId);
            String message = String.format("Survey with ID %d deleted successfully", surveyId);
            return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
        }
    }
}
