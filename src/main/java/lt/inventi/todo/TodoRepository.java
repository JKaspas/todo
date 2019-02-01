package lt.inventi.todo;

import lt.inventi.todo.generated.todo.tables.Todos;
import lt.inventi.todo.generated.todo.tables.records.TodosRecord;
import org.jooq.DSLContext;
import org.jooq.Record;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class TodoRepository {

    private final DSLContext dsl;

    public TodoRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    public List<Record> getAllTodos() {
        return dsl
                .select()
                .from(Todos.TODOS)
                .fetch();
    }

    public void persistTodo(TodosRecord todo) {
        dsl.insertInto(Todos.TODOS).set(todo).execute();
    }

    public void setTodoActiveToFalse(Integer id) {
        dsl.update(Todos.TODOS).set(Todos.TODOS.ACTIVE, false).where(Todos.TODOS.ID.eq(id)).execute();
    }

}
