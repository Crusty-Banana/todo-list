function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          onClick={() => {
            completeTodo(index);
          }}
        >
          Completed!
        </button>
        <button
          onClick={() => {
            removeTodo(index);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
