package ml.intellirn.api.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import java.io.Serializable;
import java.util.List;

import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long categoryId;

    @Column(name = "category_url", nullable = false)
    private String categoryUrl;

    @Column(name = "category_name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "category", cascade = { CascadeType.ALL })
    @JsonIgnore
    private List<Education> educationList;
}
