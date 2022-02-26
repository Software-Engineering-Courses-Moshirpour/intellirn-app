package ml.intellirn.api.model;

import org.springframework.http.HttpStatus;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class ErrorBody {
    private HttpStatus status;

    private String message;
}
