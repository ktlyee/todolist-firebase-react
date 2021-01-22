import React, { useState } from 'react'
import firebase from '../utils/fisebase'
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Form() {
  const [title, setTitle] = useState('')

  const createTodo = (e) => {
      e.preventDefault()
      const todoRef = firebase.database().ref('TodoLists')
      const todo = {
          title,
          completed: false
      }
      todoRef.push(todo)
      setTitle('')
  }

  return (
    <div>
        <form onSubmit={createTodo}>
            <input
                type="text"
                placeholder="Add new list ..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button className="add-btn" onClick={createTodo}>
                <FontAwesomeIcon icon={faPlus} size="2x"/>
            </button>
        </form>
    </div>
  );
}
export default Form;
