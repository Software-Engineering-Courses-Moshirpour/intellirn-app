package ml.intellirn.api.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.*;
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

    @ManyToOne
    @JoinColumn(name = "category_id", foreignKey = @ForeignKey(name = "fk_category"))
    @JsonIgnore
    private Category category;

    // youtube vs ahs link
    @Column(name = "link_type")
    private String linkType;

    @Column(name = "education_url", nullable = false)
    private String educationUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "description", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "object_url")
    private String objectUrl;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "last_update_date")
    private LocalDate lastUpdateDate;
}
