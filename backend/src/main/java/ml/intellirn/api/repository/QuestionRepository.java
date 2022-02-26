package ml.intellirn.api.repository;

import ml.intellirn.api.model.Question;
import ml.intellirn.api.model.QuestionId;
// import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends CrudRepository<Question, QuestionId> {

}
