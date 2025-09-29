import React from "react";

function TodoList({ todo, onComplete }) {
  return (
    <div>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            {!item.completed && (
              <button onClick={() => onComplete(item.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


