import React from 'react'
import {ACTIONS} from '../App'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Todo({ todo, dispatch }) {
    const completedStyle = {
        color: '#353F40',
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox"
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}
            />
            <span className="text-item" style={ todo.completed ? completedStyle : null }>{todo.item}</span>
            <div className="icon" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
                <FontAwesomeIcon icon= {faTrashAlt} size="lg"/>
            </div>
        </div>
    )
}

export default Todo;