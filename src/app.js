import React, {Component} from 'react';
import './app.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            text: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }





    handleChange(event) {
        this.setState({ text: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Math.random()*10
        };
        this.setState(state => ({
           todos: state.todos.concat(newItem),
           text: ''
        }));
    }

    handleRemove(id) {
        let deleteTodo = this.state.todos.filter((todo) => {
            if (todo.id !== id) return todo;
        });
        this.setState({ todos: deleteTodo})
    }


    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                <input
                    onChange={this.handleChange}
                    value={this.state.text}
                    type="text"/>
                <button onClick={this.handleSubmit}>Add todo</button>
                {this.state.todos.map((todo) => (
                    <ul key={todo.id}>
                        <li>{todo.text}</li>
                        <button onClick={this.handleRemove}>Remove</button>
                    </ul>
                ))}
            </div>
        );
    }
}

export default App;