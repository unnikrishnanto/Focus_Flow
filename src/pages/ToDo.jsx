import React from 'react'

export default function 

ToDo() {
  return (
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
  )
}
