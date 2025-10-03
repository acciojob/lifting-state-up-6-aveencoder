import React from 'react'

function TodoList({todo,handleComplete}) {
  return (
    <div>
        <h2>Child Component</h2>
       <ul>
         {
          todo.map((todo)=>(
             <li key={todo.id}>{todo.text}
            {!todo.completed && (
              <button onClick={()=>handleComplete(todo.id)}>Complete</button>
            )}
            
            </li>)
            
          )

         }
       </ul>

    </div>
  )
}

export default TodoList


