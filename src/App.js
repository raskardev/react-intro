import React, { Component } from "react";

import Container from "./components/Container";
import AddTask from "./components/Inputs/AddTask";
import TodosList from "./components/TodosList";

const Title = ({ todosCount }) => (
  <h1 style={{ textAlign: "center", fontSize: "60px", color: "#dbbcbc" }}>
    {todosCount === 0
      ? "No Todos!"
      : `You have ${todosCount} ${todosCount > 1 ? "Todos" : "Todo"}`}
  </h1>
);

const test = () => "Hola mundo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.addTodo = this._addTodo.bind(this);
    this.toggleTodo = this._toggleTodo.bind(this);
    this.deleteTodo = this._deleteTodo.bind(this);
  }

  _addTodo(todo) {
    const { todos } = this.state;
    this.setState({ todos: [...todos, todo] });
  }

  _toggleTodo(todo) {
    const { todos } = this.state;
    todos.map(item =>
      item.name === todo.name ? (item.completed = !item.completed) : item
    );
    this.setState({ todos });
  }

  _deleteTodo(todo) {
    const { todos } = this.state;
    const filteredTodos = todos.filter(item => item.name !== todo.name);
    this.setState({ todos: filteredTodos });
  }

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <Title
          todosCount={todos.filter(item => item.completed === false).length}
        />
        <AddTask addTodo={this.addTodo} />
        <TodosList
          todos={todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;
