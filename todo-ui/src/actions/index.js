import {ADD_TODO, ARCHIVE_TODO, FETCH_TODO} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/todo';

export const createTodo = ({todo, date}) => {
    return (dispatch) => {
        return axios.post(apiUrl, {description: todo, created: date})
            .then(response => {
                dispatch(createPostSuccess(response.data))
                })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: data.id,
            todo: data.description,
            date: data.created,
            active: data.active
        }
    }
};

export const archiveTodoSuccess = id => {
    return {
        type: ARCHIVE_TODO,
        payload: {
            id
        }
    }
}

export const archiveTodo = id => {
    return (dispatch) => {
        return axios.put(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(archiveTodoSuccess(id))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchTodos = (todos) => {
    return {
        type: FETCH_TODO,
        todos
    }
};

export const fetchAllTodos = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchTodos(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};