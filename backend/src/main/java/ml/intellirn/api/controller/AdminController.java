package ml.intellirn.api.controller;

import ml.intellirn.api.model.*;
import ml.intellirn.api.repository.*;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@CrossOrigin
@RestController
@Transactional
@RequestMapping("api/admin")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    PasswordEncoder pe = new BCryptPasswordEncoder();

    @GetMapping
    public ResponseEntity<?> getAllAdmins() {
        List<Admin> allAdmins = this.adminRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(allAdmins);
    }

    @GetMapping(path = "{adminId}")
    public ResponseEntity<?> getAdminById(@PathVariable("adminId") Long id) {
        Optional<Admin> adminOptional = this.adminRepository.findById(id);

        if (adminOptional.isPresent()) {
            Admin a = adminOptional.get();
            return ResponseEntity.status(HttpStatus.OK).body(a);
        }

        else {
            String message = String.format("Admin with ID %d not found", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }
    }

    private boolean isEmailUnique(Admin a) {
        boolean flag = true;
        String suppliedEmail = a.getEmail();

        List<Admin> allAdmins = this.adminRepository.findAll();

        for (Admin eachAdmin : allAdmins) {
            if (eachAdmin.getAdminId() == a.getAdminId()) {
                continue;
            }

            if (eachAdmin.getEmail() != null
                    && eachAdmin.getEmail().equalsIgnoreCase(suppliedEmail)) {
                flag = false;
                break;
            }
        }

        return flag;
    }

    @PostMapping
    public ResponseEntity<?> addAdmin(@RequestBody Admin a) {
        if (a.getEmail() == null || a.getEmail().length() == 0 || a.getPassword() == null
                || a.getPassword().length() == 0) {
            String message = "Email and password cannot be empty";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }

        if (!this.isEmailUnique(a)) {
            String message = "Email already taken";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
        }

        a.setAdminId(0L);
        String rawPassword = a.getPassword();
        a.setPassword(this.pe.encode(rawPassword));
        this.adminRepository.save(a);

        String message = "Admin added successfully";
        return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
    }

    @PutMapping(path = "{adminId}")
    public ResponseEntity<?> updateAdmin(@RequestBody Admin a, @PathVariable("adminId") Long adminId) {
        Optional<Admin> adminOptional = this.adminRepository.findById(adminId);

        if (adminOptional.isPresent()) {
            a.setAdminId(adminId);

            if (a.getEmail() == null || a.getEmail().length() == 0 || a.getPassword() == null
                    || a.getPassword().length() == 0) {
                String message = "Email and password cannot be empty";
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }

            if (!this.isEmailUnique(a)) {
                String message = "Email already taken";
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorBody(HttpStatus.BAD_REQUEST, message));
            }

            String rawPassword = a.getPassword();
            a.setPassword(this.pe.encode(rawPassword));
            this.adminRepository.save(a);

            String message = "Admin updated successfully";
            return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
        }

        else {
            String message = String.format("Admin with ID %d not found", adminId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }
    }

    @DeleteMapping(path = "{adminId}")
    public ResponseEntity<?> deleteAdmin(@PathVariable("adminId") Long adminId) {
        if (!this.adminRepository.existsById(adminId)) {
            String message = String.format("Admin with ID %d not found", adminId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorBody(HttpStatus.NOT_FOUND, message));
        }

        else {
            this.adminRepository.deleteById(adminId);
            String message = String.format("Admin with ID %d deleted successfully", adminId);
            return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
        }
    }
}
