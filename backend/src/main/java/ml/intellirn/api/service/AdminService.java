package ml.intellirn.api.service;

import ml.intellirn.api.model.*;
import ml.intellirn.api.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService implements UserDetailsService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        List<Admin> allAdmins = this.adminRepository.findAll();

        for (Admin eachAdmin : allAdmins) {
            if (eachAdmin.getEmail().equalsIgnoreCase(username)) {
                return new User(username, eachAdmin.getPassword(), new ArrayList<>());
            }
        }

        return null;
    }

    public Admin getAdminByEmail(String email) {
        List<Admin> allAdmins = this.adminRepository.findAll();

        for (Admin eachAdmin : allAdmins) {
            if (eachAdmin.getEmail().equalsIgnoreCase(email)) {
                return eachAdmin;
            }
        }

        return null;
    }
}
