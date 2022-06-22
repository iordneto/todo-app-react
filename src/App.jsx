import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="main">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
