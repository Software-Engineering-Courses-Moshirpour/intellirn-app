package ml.intellirn.api.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "contact_us")
public class ContactUs implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long contactUsId;

    @Column(name = "time_received")
    private LocalDateTime timeReceived;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "subject")
    private String subject;

    @Column(name = "message", columnDefinition = "MEDIUMTEXT")
    private String message;

    @Column(name = "is_read")
    private boolean isRead;
}
