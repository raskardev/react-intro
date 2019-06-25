import React from "react";
import TodoItem from "./components/TodoItem";

import "./styles.css";

const TodosList = props => (
  <ul className="todo-list">
    {props.todos.map(todo => (
      <TodoItem todo={todo} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />
    ))}
  </ul>
);

export default TodosList;
