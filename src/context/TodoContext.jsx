import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { editTodo, setEditTodo } = useState({});

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };
  const editTodoHandler = (id) => {
    const idObj = todos.find((item) => item.id === id);
    setEditTodo(idObj);

    console.log(idObj);
  };

  console.log(todos);

  const saveEditHandler = (newTodo) => {
    const res = todos.map((item) => {
      if (item.id === newTodo) {
        return {
          ...item,
          title: newTodo.title,
        };
      }
      return item;
    });
    setTodos(res);
    setEditTodo({});
  };

  return (
    <TodoContext.Provider
      value={{
        addNewTodo,
        todos,
        editTodoHandler,
        deleteTodoHandler,
        editTodo,
        saveEditHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
