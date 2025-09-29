import React, {useState} from "react";
import TodoList from "./TodoList";
import "./../styles/App.css";


const App =()=>{
  const [todos, setTodos] = useState([
    {id:1 , text:"Learn React", completed : false},
    {id:2, text:"Build a React App", completed: false},
    {id:3, text : "Deploy The React App", completed:false},
  ]);
  
 // Function to update completion state

 const handleComplete = (id) =>{
     setTodos(
         todos.map((todo)=>
            todo.id === id ? {...todo, completed:true}: todo
         
        )
     )
 }


 return(
     <div style={{margin:"30px"}}>
            <h1>Todo App (Lifting State Up Demo)</h1>
            <TodoList todo={todos} onComplete={handleComplete}/>
     </div>

 

)};

export default App;

// import React, { useState } from "react";
// import TodoList from "./TodoList";
// import "./../styles/App.css";

// const App = () => {
//   // Parent state: todos with completion status
//   const [todos, setTodos] = useState([
//     { id: 1, text: "Learn React", completed: false },
//     { id: 2, text: "Build a React App", completed: false },
//     { id: 3, text: "Deploy The React App", completed: false },
//   ]);

//   // Function to update completion state
//   const handleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: true } : todo
//       )
//     );
//   };

//   return (
//     <div style={{ margin: "50px" }}>
//       <h1>Todo App (Lifting State Up Demo)</h1>
//       <TodoList todos={todos} onComplete={handleComplete} />
//     </div>
//   );
// };

// export default App;