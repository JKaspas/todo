import React from 'react';

export class NewTodo extends React.Component {
    state = {
        todo: '',
        date: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if ( this.state.todo.trim()) {
            this.state.date = new Date();
            this.props.onAddTodo(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            todo: '',
            date: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label>Name your todo</label><br/>
                        <input
                            type="text"
                            className="form-control"
                            name="todo"
                            onChange={ this.handleInputChange }
                            value={ this.state.todo }
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">OK</button>
                    </div>
                </form>
            </div>
        );
    }
}
