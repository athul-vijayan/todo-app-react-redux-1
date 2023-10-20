//import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";

function App(){
  return(
    <Provider store={store}>
    <h1 className="text-white text-3xl text-center mt-16">Todo App</h1>
    <TodoList/>

    </Provider>
 

   

  )
}

export default App;
