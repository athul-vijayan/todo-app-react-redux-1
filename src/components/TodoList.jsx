import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../actionObjects';

function TodoList() {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    const [newTodo, setNewTodo]=useState('')

  return (
    <div>
        <ul>
            {todos.map(todo=>{
                return(
                    <li className='text-white' key={todo.id}>
                    {todo.text}
                
                <button className='text-white' onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
                )
            }
                
            )}
        </ul>

        <input type="text" name="" value={newTodo} onChange={e=>{
            setNewTodo(e.target.value)
        }} id="" />
        <button className='text-white' onClick={()=>{
             if (newTodo.trim()==='')return;
             dispatch(addTodo({id:Date.now(),text:newTodo}));
             setNewTodo('');
        }}>Add Todo</button>
    </div>

  )
}

export default TodoList