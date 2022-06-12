import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todoList = props.list ? props.list : [];

  return (
    <ul className="todo-list">
      {(todoList && todoList.length) > 0 &&
        todoList.map((todo, index) => (
          <TodoItem
            onRemove={props.onRemove}
            onCheck={props.onCheck}
            key={index}
            index={index}
            item={todo.text}
            isDone={todo.isDone}
          />
        ))}
    </ul>
  );
};

export default TodoList;
