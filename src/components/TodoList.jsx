import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.list);

  return (
    <ul className="todo-list">
      {(todoList && todoList.length) > 0 &&
        todoList.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            text={todo.text}
            isDone={todo.isDone}
          />
        ))}
    </ul>
  );
};

export default TodoList;
