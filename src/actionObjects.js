export const addTodo=(todo)=>(
    {
        type:'ADD_TODO',
        payload:todo
    }
)
export const removeTodo=(todoID)=>(
    {
        type:'REMOVE_TODO',
        payload:todoID
    }
)
