package lt.inventi.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    TodoRepository repo;

    public List<TodosDto> getAllActive() {
        return repo.getAllActiveTodos();
    }
}