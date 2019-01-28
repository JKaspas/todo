package lt.inventi.todo;

import lt.inventi.todo.generated.todo.Todo;
import org.jooq.DSLContext;
import org.jooq.Record;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Repository
@Transactional
public class TodoRepository {

    private final DSLContext dsl;

    public TodoRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    private TodosDto resultToTodosDto(Record r) {
        return new ModelMapper().map(r, TodosDto.class);
    }
   
    public List<TodosDto> getAllActiveTodos() {
        return dsl
                .select()
                .from(Todo.TODO.TODOS)
                .where(Todo.TODO.TODOS.ACTIVE.isTrue())
                .fetch()
                .stream()
                .map(this::resultToTodosDto)
                .collect(Collectors.toList());
    }
}
