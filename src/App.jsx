import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TotalCompletedItems from './components/TotalCompletedItems'
function App() {
  

  return (
    <div className="text-center w-screen h-screen text-white bg-slate-700">
      <h1 className="text-3xl font-bold p-8">ToDo App using Redux-toolkit </h1>
      <AddTodo />
      <TodoList />
      <TotalCompletedItems />
    </div>
  )
}

export default App
