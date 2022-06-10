import React from "react";

const TodoForm = () => (
  <div class="todo-item">
    <li>Description of a Task</li>
    <button className="todo-done-btn">
      <i className="fa solid fa-check" />
    </button>
    <button className="todo-trash-button">
      <i className="fa solid fa-trash-can" />
    </button>
  </div>
);

export default TodoForm;
