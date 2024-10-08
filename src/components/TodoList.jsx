import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import React,{useContext} from "react";
export const TodoList = ({ todos = [] }) => {
  const { editTodoHandler, deleteTodoHandler,  editTodo, saveEditHandler } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onEditTodo={editTodoHandler}
          onDeleteTodo={deleteTodoHandler}
          editTodo={editTodo}
          onSaveEdit={saveEditHandler}
        />
      ))}
    </ul>
  );
};
