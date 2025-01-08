import React from 'react'

export default function Ongoing() {
  return (
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
  )
}
