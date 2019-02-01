package lt.inventi.todo;
import lombok.Data;
import java.util.Date;

@Data
public class TodosDto {

    private Integer id;
    private String description;
    private Date created;
    private Boolean active = true;
}
