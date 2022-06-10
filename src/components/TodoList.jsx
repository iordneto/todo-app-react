import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todoList = props.list ? props.list : [];

  return (
    <ul className="todo-list">
      {(todoList && todoList.length) > 0 &&
        todoList.map((todoItem) => <TodoItem item={todoItem} />)}
    </ul>
  );
};

export default TodoList;
