import React, { useState } from 'react'
import "../styles/Home.css"

export default function Home() {
  
  {/*UseState for storing task */}
  const [task, setTask] = useState('');

  {/*This method is called on form submission*/}  
  const handleSubmit = (event) => {
      event.preventDefault();
      alert(task);
      setTask('');
  }

  return (
    <div className='home-div'>
      {/* Receiving input for adding a task */}
          <div className='input-form'>  
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='Enter a task and click add button...'
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  />
                <button className='add-button'>ADD TASK</button>
            </form>
        </div>
      {/*div that contains the 3 lists */}
        <div className='task-div'>
          {/*To Do List */}
            <div className='task-list-div'>    
                <h2>To-Do Tasks</h2>
                <ul>
                <li>
                      <div className='list-item'>
                        <p>Task 1 Doctors appointmant </p>
                        <button className='list-button'>On Going</button>
                        <button className='list-button' >Completed</button>
                        <button className='list-button remove-button'>Remove</button>
                      </div>
                    </li>
                </ul>
            </div>

           {/*Ongoing task List */}
            <div className='task-list-div ongoing'>
                <h2>Ongoing Tasks</h2>
                <ul>
                    <li>
                      <div className='list-item'>
                        <p>Complete LinkedIn </p>
                        <button className='list-button'>Completed </button>
                        <button className='list-button' >To Do</button>
                        <button className='list-button remove-button'>Remove</button>
                      </div>
                    </li>
                </ul>
            </div>

             {/*Completed Task List */}
            <div className='task-list-div'>
                <h2>Completed Tasks</h2>  
                <ul>
                <li>
                      <div className='list-item'>
                        <p>Finish the project</p>
                        <button className='list-button'>To do </button>
                        <button className='list-button' >Ongoing</button>
                        <button className='list-button remove-button'>Remove</button>
                      </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
