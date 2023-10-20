import { configureStore } from "@reduxjs/toolkit";
//import { createStore } from "redux";

const initialState={todos:[]};

const todoReducerFunction=function(state=initialState,action){
    switch (action.type) {
        case 'ADD_TODO':
            return{todos:[...state.todos, action.payload]}
        case 'REMOVE_TODO':
            return{todos:state.todos.filter(todo=>todo.id !==action.payload)}
        default: return state;
    }
}
//const store=createStore(todoReducerFunction);
const store=configureStore({reducer:todoReducerFunction,})
export default store;