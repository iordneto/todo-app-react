import React, { useState } from "react";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = () => {
    props.onSubmit(text);
    setText("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task here..."
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleSubmit} className="add-todo-btn">
        <i className="fa-thin fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoForm;
