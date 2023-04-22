import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    const todos = useSelector((state)=>state.todos)
  return (
    <div >
         
        {
            todos.map((todo)=>(
                <>
                <div key={todo.id}>
                <TodoItem   id={todo.id} title={todo.title} status={todo.status} />
                </div>
                  
                </>
            ))
        }
    </div>
  )
}

export default TodoList
