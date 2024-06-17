import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoForm from './Components/AddTodoForm'
import TodosList from './Components/TodosList'
import {useSelector} from 'react-redux'
function App() {

  const todos = useSelector(state => state.todos)
  return (
    <>
      <h1>Learn reduxToolkit Todo</h1>
      <AddTodoForm/>
      <ul className="list-none">
      {todos.map((todo)=>(<TodosList key= {todo.id} todo={todo}/>))}
      </ul>
      
    </>
  )
}

export default App
