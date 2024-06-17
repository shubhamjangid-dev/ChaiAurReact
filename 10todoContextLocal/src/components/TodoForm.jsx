import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/TodoContext'
function TodoForm() {
    const { todos,addTodo } = useContext(TodoContext)
    const [todoMessage, setTodoMessage] = useState("")
    const addNewTodo = (e)=>{
        e.preventDefault()
        setTodoMessage(e.target.value)
        if(todoMessage)
        {
            addTodo({todoMsg : todoMessage, completed : false})
            setTodoMessage("")
        }
    }
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todoMessage}
                onChange={(e)=>{setTodoMessage(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={addNewTodo}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;