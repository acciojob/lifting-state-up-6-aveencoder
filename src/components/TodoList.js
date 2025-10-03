import React from 'react'

function TodoList({todo,onComplete}) {
  return (
    <div>
       <ul>
         {
          todo.map((todo)=>(
            
            <li>{todo.text}
            {!todo.completed && (
              <button onClick={()=>onComplete(todo.id)}>Complete</button>
            )}
            
            </li>)
            
          )

         }
       </ul>

    </div>
  )
}

export default TodoList


