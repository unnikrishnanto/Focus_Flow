import React, { useState } from 'react'

export default function AddTask() {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(task);
      setTask('');
  }

  return (
    
    <div className='input-form'>  
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Enter a task...'
               value={task}
               onChange={(e) => setTask(e.target.value)}
               />
            <button className='add-button'>ADD TASK</button>
        </form>
    </div>
  )
}
