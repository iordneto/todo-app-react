import React, { useContext } from "react";
import TodoContext from "../TodoContext";

const TodoItem = ({ index, text, isDone }) => {
  const [todoList, setTodoList] = useContext(TodoContext);

  const handleCheck = () => {
    const todos = [...todoList];
    todos[index] = {
      isDone: !todos[index].isDone,
      text: todos[index].text,
    };

    setTodoList([...todos]);
  };

  const handleRemove = () => {
    console.log(todoList);
    setTodoList(todoList.filter((todo, todoId) => todoId !== index));
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
