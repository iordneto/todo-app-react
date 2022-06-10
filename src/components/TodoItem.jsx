import React from "react";

const TodoForm = (props) => (
  <div className="todo-item">
    <li>{props.item}</li>
    <button className="todo-done-btn">
      <i className="fa solid fa-check" />
    </button>
    <button className="todo-trash-button">
      <i className="fa solid fa-trash-can" />
    </button>
  </div>
);

export default TodoForm;
