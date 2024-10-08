import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const { addNewTodo } = useContext(TodoContext);
  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: value,
    };
    addNewTodo(newTodo);
    setValue("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
