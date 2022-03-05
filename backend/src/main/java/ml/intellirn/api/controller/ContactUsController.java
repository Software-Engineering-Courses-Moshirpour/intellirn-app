package ml.intellirn.api.controller;

import ml.intellirn.api.model.*;
import ml.intellirn.api.repository.*;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;

@CrossOrigin
@RestController
@Transactional
@RequestMapping("api/contactus")
public class ContactUsController {
    @Autowired
    private ContactUsRepository contactUsRepository;

    @GetMapping
    public ResponseEntity<?> getAllContactUs() {
        List<ContactUs> allContactUs = this.contactUsRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(allContactUs);
    }

    @GetMapping(path = "{contactUsId}")
    public ResponseEntity<?> getContactUsById(@PathVariable("contactUsId") Long id) {
        Optional<ContactUs> contactUsOptional = this.contactUsRepository.findById(id);

        if (contactUsOptional.isPresent()) {
            ContactUs cu = contactUsOptional.get();
            cu.setRead(true);
            ContactUs cuUpdated = this.contactUsRepository.save(cu);

            return ResponseEntity.status(HttpStatus.OK).body(cuUpdated);
        }

        else {
            String message = String.format("ContactUs with ID %d not found", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }
    }

    @PostMapping
    public ResponseEntity<?> addContactUs(@RequestBody ContactUs c) {
        c.setContactUsId(0L);
        c.setTimeReceived(LocalDateTime.now());
        c.setRead(false);

        this.contactUsRepository.save(c);

        String message = "Request submitted";
        return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
    }

    @DeleteMapping(path = "{contactUsId}")
    public ResponseEntity<?> deleteContactUs(@PathVariable("contactUsId") Long contactUsId) {
        if (!this.contactUsRepository.existsById(contactUsId)) {
            String message = String.format("ContactUs with ID %d not found", contactUsId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            this.contactUsRepository.deleteById(contactUsId);
            String message = String.format("ContactUs with ID %d deleted successfully", contactUsId);
            return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
        }
    }
}
