import React ,{useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, updateTodoV2, completeTode} from '../Features/todo/todoSlice'
function TodosList({todo}) {

    const isTodoUpdatable = useSelector(state => state.isTodoUpdatable)

    const dispatch = useDispatch()
    const [text, setText] = useState(todo.text)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    return (
        <>
              <li
                className={`mt-4 flex justify-between items-center ${
                    todo.completed ? "bg-green-200" : "bg-zinc-800"
                } px-4 py-2 rounded`}
                key={todo.id}
              >
                <div className='w-4/5 flex'>
                <input 
                    type='checkbox' 
                    className='mr-3 text-green-600 bg-gray-100 border-gray-300 rounded dark:border-gray-600'
                    value="" 
                    checked = {todo.completed} 
                    onChange={()=>{dispatch(completeTode(todo.id))}}
                />
                <div 
                    className={`w-3/5 text-left}`} 
                >
                    <input 
                        className={`border outline-none w-full bg-transparent rounded-lg px-2 ${
                            isTodoEditable ? "border-black/70 " : "border-transparent"
                        } ${todo.completed ? "line-through text-green-800" : "text-white"}`}
                        type='text' 
                        value = {text} 
                        onChange = {(e)=>{setText(e.target.value)}}
                        readOnly = {!isTodoEditable}
                    />
                </div>

                </div>
                {todo.completed?"":
                    <>
                    <button
                        onClick={() => {
                            if (isTodoEditable) {
                                dispatch(updateTodo({id :todo.id, text}))
                            } 
                            setIsTodoEditable((prev) => !prev);
                        }}
                        className= {`text-white ${isTodoUpdatable?"bg-green-400":"bg-green-600 hover:bg-green-500"} border-0 py-1 px-4 rounded text-md`}
                        disabled = {isTodoUpdatable}
                    >
                        {isTodoEditable?"Save":"Edit"}
                    </button>
                    <button
                        onClick={() => {
                            dispatch(updateTodoV2({todoInput : todo.text, isTodoUpdatable:true}));
                            dispatch(removeTodo(todo.id))
                        }}
                        className={`text-white ${isTodoUpdatable?"bg-green-400":"bg-green-600 hover:bg-green-500"} border-0 py-1 px-4 rounded text-md`}
                        disabled = {isTodoUpdatable}
                    >
                        Update
                    </button>
                    </>
                }
                

                <button
                 onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </li>
        </>
      )
}

export default TodosList