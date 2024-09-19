import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import GetTodos from './components/GetTodos'

export default function App() {
  const [todos, setTodos] = useState([])

  const fetchAllTodos = () => {
    const todoList = localStorage.getItem("todoList")

    return todoList ? JSON.parse(todoList) : []
  }

  useEffect(() => {
    const allTodos = fetchAllTodos()
    setTodos(allTodos)
  }, [])

  return (
   <div className='w-[90%] mx-auto my-8'>
    <h1 className='text-4xl font-bold text-center'>Todo Application in React</h1>

    <AddTodo todos = {todos} setTodos = {setTodos}/>

    <GetTodos  todos = {todos} setTodos = {setTodos}/>
   </div>
  )
}
