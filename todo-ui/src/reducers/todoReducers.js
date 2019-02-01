import { ADD_TODO, ARCHIVE_TODO, FETCH_TODO } from '../actions/types';

export default function todoReducers(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case ARCHIVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case FETCH_TODO:
            return action.todos;
        default:
            return state;
    }
}