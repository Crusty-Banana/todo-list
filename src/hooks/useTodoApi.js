import { useState } from "react";

function useTodoApi(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return {
    todos,
    addTodo,
    completeTodo,
    removeTodo,
  };
}

export default useTodoApi;
