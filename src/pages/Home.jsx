import React from 'react'
import "../styles/Home.css"
import AddTask from './AddTask'
import ToDo from './ToDo'
import Ongoing from './Ongoing'
import Completed from './Completed'

export default function Home() {
  return (
    <div className='home-div'>
        <AddTask />
        <div className='task-div'>
            <ToDo />
            <Ongoing />
            <Completed />
        </div>
    </div>
  )
}
