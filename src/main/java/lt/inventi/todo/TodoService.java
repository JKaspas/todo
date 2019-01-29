package lt.inventi.todo;

import lt.inventi.todo.generated.todo.tables.Todos;
import lt.inventi.todo.generated.todo.tables.records.TodosRecord;
import org.jooq.Record;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    TodoRepository repo;

    private TodosDto resultToTodosDto(Record r) {
        return new ModelMapper().map(r, TodosDto.class);
    }

    private TodosRecord todosDtoToRecord(TodosDto todo) {
        return new ModelMapper().map(todo, TodosRecord.class);
    }

    public List<TodosDto> getAll() {
        return repo.getAllTodos()
                .stream()
                .map(this::resultToTodosDto)
                .collect(Collectors.toList());
    }

    public void addNewTodo(TodosDto todo) {
        repo.persistTodo(todosDtoToRecord(todo));
    }

    public void updateTodo(Integer id) {
        try {
            repo.setTodoActiveToFalse(id);
        } catch (Exception e) {
            throw new IllegalArgumentException();
        }
    }
}
