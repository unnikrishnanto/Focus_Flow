import React from 'react'

export default function Completed() {
  return (
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
  )
}
