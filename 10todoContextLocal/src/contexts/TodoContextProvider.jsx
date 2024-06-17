// import React, { useState , useEffect } from 'react'
// import TodoContext from './TodoContext'

// function TodoContextProvider({children}) {
//     const [todos, setTodos] = useState([])
    
//     const addTodo = (todo)=>{
//         setTodos((prevTodos) =>[...prevTodos, {id : Date.now(),...todo}])
//     }
    
//     const updateTodo = (id, todo)=>{
//         setTodos((prevTodos)=> prevTodos.map((ele) => (ele.id === id ? todo : ele)))
//     }
    
//     const deleteTodo = (id)=>{
//         setTodos((prevTodos)=> prevTodos.filter((ele) => ele.id !== id))
//     }
    
//     const toggleComplete = (id)=>{
//         setTodos((prevTodos)=> prevTodos.map((ele) => (ele.id === id ? {...ele, completed : !ele.completed} : ele)))
//     }
    
//     // useEffect(() => {
//     //     const storedTodos = JSON.parse(localStorage.getItem("todos"))
//     //     if(storedTodos && storedTodos.length > 0)
//     //         setTodos(storedTodos)
//     // }, [])
//     // useEffect(() => {
//     //     console.log("c",todos);
//     //     localStorage.setItem("todos", JSON.stringify(todos))
//     // }, [todos])

//   return (
//     <TodoContext.Provider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//         {children}
//     </TodoContext.Provider>
//   )
// }

// export default TodoContextProvider