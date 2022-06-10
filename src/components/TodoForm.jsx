import React from "react";

const TodoForm = () => (
  <div class="todo-form">
    <input
      type="text"
      className="todo-input"
      placeholder="Add a new task here..."
    />
    <button type="submit" class="add-todo-btn">
      <i class="fa-thin fa-plus"></i>
    </button>
  </div>
);

export default TodoForm;
