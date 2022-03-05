package ml.intellirn.api.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "survey")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long categoryId;

    @Column(name = "type", nullable = false)
    private String name;

    @OneToMany(mappedBy = "education", cascade = { CascadeType.ALL })
    private List<Education> educationList;
}
