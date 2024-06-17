import {configureStore} from '@reduxjs/toolkit'

import todoReducers from '../Features/todo/todoSlice'
export const store = configureStore({
    reducer : todoReducers
});