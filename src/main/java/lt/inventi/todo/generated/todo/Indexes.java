/*
 * This file is generated by jOOQ.
 */
package lt.inventi.todo.generated.todo;


import javax.annotation.Generated;

import lt.inventi.todo.generated.todo.tables.Todos;

import org.jooq.Index;
import org.jooq.OrderField;
import org.jooq.impl.Internal;


/**
 * A class modelling indexes of tables of the <code>todo</code> schema.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Indexes {

    // -------------------------------------------------------------------------
    // INDEX definitions
    // -------------------------------------------------------------------------

    public static final Index TODOS_PRIMARY = Indexes0.TODOS_PRIMARY;

    // -------------------------------------------------------------------------
    // [#1459] distribute members to avoid static initialisers > 64kb
    // -------------------------------------------------------------------------

    private static class Indexes0 {
        public static Index TODOS_PRIMARY = Internal.createIndex("PRIMARY", Todos.TODOS, new OrderField[] { Todos.TODOS.ID }, true);
    }
}
