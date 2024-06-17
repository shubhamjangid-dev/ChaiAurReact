import {createContext} from 'react'

const TodoContext = createContext({
    todos :[],
    addTodo : (todo)=>{},
    updateTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export default TodoContext
export const TodoContextProvider = TodoContext.Provider