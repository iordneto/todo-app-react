import React, { useState, useContext } from "react";
import TodoContext from "../TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: text,
      isDone: false,
    };
    console.log(text);
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
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
