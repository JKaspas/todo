import * as React from "react";
import {connect} from 'react-redux';
import {archiveTodo} from "../actions";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

function TodoListComponent({todos, onArchive, active}) {
    const styles = theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: 500,
        },
    });

    if (!todos.length) {
        return (
            <div>
                No Todo's
            </div>
        )
    }
    return (
        <Paper className={styles.root}>
            <Table className={styles.table}>
                <TableBody>
                    {todos.filter(todo => todo.active === active).map(todo => {
                        return (
                            <TodoItem todo={todo} onArchive={onArchive} key={todo.id}/>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onArchive: id => {
            dispatch(archiveTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
