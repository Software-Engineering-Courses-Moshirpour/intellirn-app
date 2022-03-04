package ml.intellirn.api.controller;

import ml.intellirn.api.model.*;
import ml.intellirn.api.security.*;
import ml.intellirn.api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;

@CrossOrigin
@RestController
@Transactional
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping
    public ResponseEntity<?> createAuthToken(@RequestBody Admin a) {
        try {
            this.authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(a.getEmail(), a.getPassword()));
        } catch (BadCredentialsException e) {
            String message = "Incorrect email or password";
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorBody(HttpStatus.FORBIDDEN, message));
        }

        final UserDetails verifiedUser = this.adminService.loadUserByUsername(a.getEmail());

        if (verifiedUser == null) {
            String message = "Incorrect email or password";
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorBody(HttpStatus.FORBIDDEN, message));
        }

        final String jwt = this.jwtTokenUtil.generateToken(verifiedUser);

        String message = jwt;
        return ResponseEntity.status(HttpStatus.OK).body(new ErrorBody(HttpStatus.OK, message));
    }
}
