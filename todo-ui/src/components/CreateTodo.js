import {connect} from 'react-redux';
import {createTodo, fetchAllTodos} from '../actions';
import {NewTodo} from "./NewTodo";

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: todo => {
            dispatch(createTodo(todo));
            dispatch(fetchAllTodos());
        }
    };
};

export default connect(null, mapDispatchToProps)(NewTodo);