import React from "react";

const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task here..."
        value={props.text}
        onChange={props.onChange}
      />
      <button onClick={props.onSubmit} className="add-todo-btn">
        <i className="fa-thin fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoForm;
