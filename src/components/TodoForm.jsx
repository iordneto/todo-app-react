import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/todo/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: text,
      isDone: false,
    };

    dispatch(add(newTodo));
  };

  const handleChange = ({ target }) => {
    setText(target.value);
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
