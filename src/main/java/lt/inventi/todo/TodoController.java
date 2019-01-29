package lt.inventi.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    TodoService service;

    @GetMapping
    private List<TodosDto> getAllTodos() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private void createTodo(@RequestBody TodosDto todo) {
        service.addNewTodo(todo);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    private void archiveTodo(@PathVariable Integer id) {
        service.updateTodo(id);
    }
}

