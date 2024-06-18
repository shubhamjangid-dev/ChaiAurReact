import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodoV2 } from '../Features/todo/todoSlice'

function AddTodoForm() {
  const todoInput = useSelector(state => state.todoInput)
  const isTodoUpdatable = useSelector(state => state.isTodoUpdatable)
  // const [input, setInput] = useState(todoInput);
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        if(todoInput !== '')
        dispatch(addTodo(todoInput));
        // setInput('');
        dispatch(updateTodoV2({todoInput : '', isTodoUpdatable:false}))
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="w-3/5 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={todoInput}
            // onChange={(e) => setInput(e.target.value)}
            onChange={(e) => {
              dispatch(updateTodoV2({todoInput : e.target.value, isTodoUpdatable}))
            }}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {!isTodoUpdatable?"Add Todo":"Update"}
          </button>
        </form>
      )
}
export default AddTodoForm 