import { useContext } from "react";
import { TodoList } from "./TodoList";
import { TodoContext } from "../context/TodoContext";

export const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
