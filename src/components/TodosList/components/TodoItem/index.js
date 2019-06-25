import React from "react";

import "./styles.css";

const TodoItem = ({ todo: { name, completed }, toggleTodo, deleteTodo }) => (
  <div className="item-container">
    <input
      type="checkbox"
      checked={completed}
      onChange={() => toggleTodo({ name, completed })}
    />
    <li>
      {completed ? (
        <span>
          <strike>{name}</strike>
        </span>
      ) : (
        <span>{name}</span>
      )}
    </li>
    <div className="delete-item-container">
      <span onClick={() => deleteTodo({ name })} className="delete-item">
        &times;
      </span>
    </div>
  </div>
);

export default TodoItem;
