import React from "react";
import { useDispatch } from "react-redux";

import { remove, toggleCheck } from "../features/todo/todoSlice";

const TodoItem = ({ index, text, isDone }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleCheck(index));
  };

  const handleRemove = () => {
    dispatch(remove(index));
  };

  return (
    <div className={`todo-item ${isDone ? "done" : ""}`}>
      <li>{text}</li>
      <button className="todo-done-btn" onClick={handleCheck}>
        <i className="fa solindex fa-check" />
      </button>
      <button className="todo-trash-button" onClick={handleRemove}>
        <i className="fa solindex fa-trash-can" />
      </button>
    </div>
  );
};

export default TodoItem;
