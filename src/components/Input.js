import React, { useState } from 'react'
import firebase from '../Firebase'

export default function Input(){
  const [task, setTask] = useState("")

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleClick = (e) => {
    const todoRef = firebase.database().ref('todo')
    const todo = {
      task,
      completed: false
    }
    todoRef.push(todo)
    setTask("")
  }

  return(
    <div className="input">
      <input type="text" value={task} onChange={handleChange} placeholder="Enter a Todo..."/>
      <button className="add-btn" onClick={handleClick} disabled={!task}><i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> </button>
    </div>
  )
}