package lt.inventi.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    TodoService service;

    @GetMapping
    private List<TodosDto> getAllActivTodos() {
        return service.getAllActive();
    }
}

