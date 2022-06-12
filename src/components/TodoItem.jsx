import React from "react";

const TodoItem = (props) => {
  const handleRemove = () => {
    props.onRemove(props.index);
  };

  const handleCheck = () => {
    props.onCheck(props.index);
  };

  return (
    <div className={`todo-item ${props.isDone ? "done" : ""}`}>
      <li>{props.item}</li>
      <button className="todo-done-btn" onClick={handleCheck}>
        <i className="fa solid fa-check" />
      </button>
      <button className="todo-trash-button" onClick={handleRemove}>
        <i className="fa solid fa-trash-can" />
      </button>
    </div>
  );
};

export default TodoItem;
