package ml.intellirn.api.model;

import java.io.Serializable;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionId implements Serializable {
    private Long questionId;

    private Long survey;
}
