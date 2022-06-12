import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    console.log(text);
    const newTodo = {
      text: text,
      isDone: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const removeTodo = (id) => {
    console.log(id);
    console.log(todoList);
    setTodoList(todoList.filter((todo, index) => index !== id));
  };

  const toggleCheck = (id) => {
    const todos = todoList;
    todos[id] = {
      isDone: !todos[id].isDone,
      text: todos[id].text,
    };

    setTodoList([...todos]);
  };

  return (
    <div className="main">
      <Header />
      <TodoForm onSubmit={addTodo} />
      <TodoList onCheck={toggleCheck} onRemove={removeTodo} list={todoList} />
    </div>
  );
}

export default App;
