import React from 'react'
import firebase from '../utils/fisebase'
import '../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Todo({ todo }) {

    const completedStyle = {
        color: '#353F40',
        textDecoration: "line-through"
    }

    const deleteTodo = () => {
        const todoRef = firebase.database().ref('TodoLists').child(todo.id)
        todoRef.remove()
    }

    const completedTodo = () => {
        const todoRef = firebase.database().ref('TodoLists').child(todo.id)
        todoRef.update({
            completed: !todo.completed
        })
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox"
                onClick={completedTodo}
            />
            <span className="text-item" style={ todo.completed ? completedStyle : null }>{todo.title}</span>
            <span className="delete-icon" onClick={deleteTodo}>
                <FontAwesomeIcon icon= {faTrashAlt} size="lg"/>
            </span>
        </div>
    )
}

export default Todo;