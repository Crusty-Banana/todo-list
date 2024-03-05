import "./App.css";
import Todo from "./Todo/Todo.js";
import TodoForm from "./TodoForm/TodoForm.js";
import useTodoApi from "../../hooks/useTodoApi.js";

function App() {
  const { completeTodo, removeTodo, addTodo, todos } = useTodoApi([
    { text: "Learn about React", isCompleted: false },
    { text: "Do chores", isCompleted: false },
    { text: "Get up in the morning", isCompleted: false },
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
