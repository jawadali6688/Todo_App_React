import React, { useState } from 'react'

export default function AddTodo({todos, setTodos}) {
    const [task, setTask] = useState("")

    const addTodo = () => {

        if (!task || task === "") {
            return
        }
        
        const data = {
            "name": task
        }
        const todosForAdding = [...todos, data]
        localStorage.setItem("todoList", JSON.stringify(todosForAdding))
        setTodos(todosForAdding)
        setTask("")

    }

  return (
    <div className='flex flex-row gap-2 justify-center items-center my-8'>
      <input 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className='text-gray-600 py-2 px-4 rounded-md w-[400px]' type="text" placeholder='Your Task' />

      <button
      onClick={() => addTodo()}
      className='py-2 px-4 rounded-md bg-blue-700'>Add Task</button>
    </div>
  )
}
