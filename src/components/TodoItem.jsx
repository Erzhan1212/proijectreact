import { useState } from "react";

export const TodoItem = ({
  title,
  id,
  onEditTodo,
 onDeleteTodo,
  editTodo,
}) => {
  const [editValue,setEditValue]=useState(title)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo={
      title:editValue,
      id,
    }
    setEditValue("");
    onSaveEdit(newTodo)
  };
  return (
    <li>
      {editTodo.id === id ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={editValue}  onChange={(e)=>setEditValue(e.target.value)}/> 
          <button type="submit">save</button>{" "}
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <button onClick={() =>  onDeleteTodo(id)}>Delete</button>
          <button onClick={() => onEditTodo(id)}>Edit</button>
        </>
      )}
    </li>
  );
};
