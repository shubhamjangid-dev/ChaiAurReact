import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{
        id : 1,
        text : "Hello",
        completed : false
    }],
    todoInput:"",
    isTodoUpdatable : false
}

// slice directly export nahi hota 
// reducers ko individually bhi export krna padega
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            // state --> access of current state of {initialState}
            // action --> data pass or (props)
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : false
            }
            state.todos.push(todo);
        },

        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload)) // take element if cond is true

        },

        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo)=>(todo.id === action.payload.id)?{...todo, text : action.payload.text }:todo)
        },

        updateTodoV2 : (state, action) => {
            state.todoInput = action.payload.todoInput
            state.isTodoUpdatable = action.payload.isTodoUpdatable
        },

        completeTode : (state, action) => {
            state.todos = state.todos.map((todo)=>(todo.id === action.payload)?{...todo, completed : !todo.completed }:todo)
        }
    }

})

export const{
    addTodo,
    removeTodo,
    updateTodo,
    updateTodoV2,
    completeTode
} = todoSlice.actions

// store ko bhh batana h reducers ke bare m because only reducers can update the store
export default todoSlice.reducer 