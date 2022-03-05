package ml.intellirn.api.model;

import javax.persistence.*;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@IdClass(QuestionId.class)
@Table(name = "question")
public class Question implements Serializable {
    @Id
    @Column(name = "id")
    private long questionId;

    @Id
    @ManyToOne
    @JoinColumn(name = "survey_id", foreignKey = @ForeignKey(name = "fk_question_survey"))
    @JsonIgnore
    private Survey survey;

    @Column(name = "content")
    private String content;

    @Column(name = "stem")
    private String stem;

    @Column(name = "uid")
    private Long uid;
}
