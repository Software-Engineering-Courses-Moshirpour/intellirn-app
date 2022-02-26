package ml.intellirn.api.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "education")
public class Education implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long educationId;

    @Column(name = "education_url", nullable = false)
    private String educationUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "description", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "video_url")
    private String youtubeUrl;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "last_update_date")
    private LocalDate lastUpdateDate;
}
