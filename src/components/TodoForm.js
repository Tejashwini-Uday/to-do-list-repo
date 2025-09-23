import React from 'react'

const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type="text" className='todo-input' placeholder='What is the Task for today?' />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm