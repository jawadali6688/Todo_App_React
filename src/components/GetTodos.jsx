import React from 'react'

export default function GetTodos({todos, setTodos}) {


    const deleteTodo = (item) => {
        const deletedTodos = todos.filter(todo => todo !== item)

        setTodos(deletedTodos)
        localStorage.setItem("todoList", JSON.stringify(deletedTodos))

    }
  return (
    <div className='flex flex-col gap-4 w-[70%] mx-auto justify-center text-gray-600'>
     {
        todos.map((task, index) => (
            <div key={index} className='flex justify-between items-center bg-gray-200 py-4 px-4 rounded-md'> 
                <h1>{task.name}</h1>
                <button
                onClick={() => deleteTodo(task)}
                className='bg-red-600 hover:bg-red-700 px-8 py-2 text-white rounded-md'>Delete</button>
            </div>
        ))
     }
    </div>
  )
}
