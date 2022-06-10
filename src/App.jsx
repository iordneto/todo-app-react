import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleFormChange = ({ target }) => {
    setNewTodo(target.value);
  };

  const handleFormSubmit = () => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setNewTodo("");
  };

  useEffect(() => {
    console.log(todoList);
  });

  return (
    <div className="main">
      <Header />
      <TodoForm
        text={newTodo}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      />
      <TodoList list={todoList} />
    </div>
  );
}

export default App;
