import React, { useState } from 'react'
import "../styles/Home.css"

export default function Home() {
  
  {/*UseState for storing task */}
  const [task, setTask] = useState('');
  
  {/*Task List */}
  const [taskList, setTaskList] =  useState({todo:[], ongoing:[], completed:[]});

  {/*This method is called on form submission*/}  
  const handleSubmit = (event) => {
      event.preventDefault();
      if(task.trim() !== "") {
        setTaskList((prevTaskList) =>({
            ...prevTaskList,
            todo:[...prevTaskList.todo, task],
        }));
        setTask('');
      }
    }

  const moveTask = (currentCategory, targetCategory, taskToMove) =>{
    setTaskList((prevTaskList) => {
      // Remove task from currentCategory
      const updatedCurrent = prevTaskList[currentCategory].filter((t) => t != taskToMove);

      // Add task to target
      const updatedtarget = [...prevTaskList[targetCategory], taskToMove];
      
      return {...prevTaskList, [currentCategory]: updatedCurrent, [targetCategory]: updatedtarget};
    })
  }
  
  {/*Function to remove the taks from list*/}
  const removeTask = (category, index) => {
    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      [category]: prevTaskList[category].filter((t, i) => i !== index),
    }))
      
  }  

  const clearTasks = (category) => {
    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      [category]:[]
    })
  )}

  return (
    <div className='home-div'>
      {/* Receiving input for adding a task */}
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

      {/*div that contains the 3 lists */}
        <div className='task-div'>
          {/*To Do List */}
            <div className='task-list-div'>    
                <h2>To-Do Tasks</h2>
                <ul>
                {taskList.todo.map((t, index) => {
                   return(
                      <li key = {index}>
                      <div className='list-item'>
                        <p>{t}</p>
                        <button
                           className='list-button'
                           onClick={()=> moveTask('todo', 'ongoing', t)}
                        >Ongoing</button>
                        <button
                          className='list-button' 
                          onClick={()=> moveTask('todo', 'completed', t)}
                        >Completed</button>
                        <button
                           className='list-button remove-button'
                           onClick={()=>removeTask('todo', index)}
                        >Remove</button>
                      </div>
                    </li>
                  )
                })}
                </ul>

                {taskList.todo.length == 0 ? <span></span>:
                    <button 
                    className='clear-button'
                    onClick={()=>clearTasks('todo')} 
                    >Clear all</button>
                }

            </div>

           {/*Ongoing task List */}
            <div className='task-list-div ongoing'>
                <h2>Ongoing Tasks</h2>
                <ul>
                  {taskList.ongoing.map((t, index) =>{
                    return(
                      <li key={index}>
                        <div className='list-item'>
                          <p>{t}</p>
                          <button
                            className='list-button'
                            onClick={()=> moveTask('ongoing', 'completed', t)}
                          >Completed </button>
                          <button 
                            className='list-button' 
                            onClick={()=> moveTask('ongoing', 'todo', t)}
                          >To Do</button>
                          <button
                            className='list-button remove-button'
                            onClick={()=> removeTask('ongoing', index)}
                          >Remove</button>
                        </div>
                    </li>
                    )
                  })}

                  </ul>
                  
                  {taskList.ongoing.length == 0 ? <span></span>:
                    <button 
                    className='clear-button'
                    onClick={()=>clearTasks('ongoing')} 
                    >Clear all</button>
                  }  
            </div>

             {/*Completed Task List */}
            <div className='task-list-div'>
                <h2>Completed Tasks</h2>  
                <ul>
                  {taskList.completed.map((t, index) => {
                    return (
                      <li index={index}>
                        <div className='list-item'>
                          <p>{t}</p>
                          <button
                            className='list-button'
                            onClick={()=> moveTask('completed', 'todo', t)}
                          >To do </button>
                          <button 
                            className='list-button' 
                            onClick={()=> moveTask('completed', 'ongoing', t)}
                          >Ongoing</button>
                          <button 
                            className='list-button remove-button'
                            onClick={()=>removeTask('completed', index)}
                          >Remove</button>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                {taskList.completed.length == 0 ? <span></span>:
                    <button 
                    className='clear-button' 
                    onClick={()=>clearTasks('completed')}
                    >Clear all</button>
                }
            </div>

        </div>
    </div>
  )
}
