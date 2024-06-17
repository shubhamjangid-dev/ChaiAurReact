import { useContext , useEffect, useState} from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
// import TodoContext from './contexts/TodoContext'
// import TodoContextProvider from './contexts/TodoContextProvider'
import {TodoContextProvider} from './contexts/TodoContext'

function App() {
  // const {todos} = useContext(TodoContext)

  const [todos, setTodos] = useState([])
    
    const addTodo = (todo)=>{
        setTodos((prevTodos) =>[...prevTodos, {id : Date.now(),...todo}])
    }
    
    const updateTodo = (id, todo)=>{
        setTodos((prevTodos)=> prevTodos.map((ele) => (ele.id === id ? todo : ele)))
    }
    
    const deleteTodo = (id)=>{
        setTodos((prevTodos)=> prevTodos.filter((ele) => ele.id !== id))
    }
    
    const toggleComplete = (id)=>{
        setTodos((prevTodos)=> prevTodos.map((ele) => (ele.id === id ? {...ele, completed : !ele.completed} : ele)))
    }

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"))
      if(storedTodos && storedTodos.length > 0)
        setTodos(storedTodos)
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
  
  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {
                    todos.map((ele) => (
                      <div className="w-full" key={ele.id}>
                        <TodoItem todo={ele}/>
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
