import React, {Component} from 'react';
import './app.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 0, text: 'New task 1'},
                {id: 1, text: 'New task 2'},
                {id: 2, text: 'New task 3'},
            ],
            text: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }


    handleChange(event) {
        this.setState({text: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Math.random() * 10
        };
        this.setState(state => ({
            todos: state.todos.concat(newItem),
            text: ''
        }));
        console.log(newItem)
    }

    handleRemove = (id) => {
        const filteredItems = this.state.todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({
            todos: filteredItems
        })
        console.log(filteredItems)
    }


    render() {
        const todoList = this.state.todos.map(({id, text}) => {
            return (
                <li key={id}
                    className="todo">
                    {text}
                    <button
                        className="btn"
                        onClick={() => this.handleRemove(id)}>
                        x
                    </button>
                </li>
            );
        });

        return (
            <div className="container">
                <h1>Todo List</h1>
                <form className="form">
                    <input
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.text}
                        type="text"/>
                    <button
                        className=" btn btn-big"
                        onClick={this.handleSubmit}>
                        Add
                    </button>
                </form>
                <ul className="todos">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default App;