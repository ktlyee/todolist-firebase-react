import React, { useState, useEffect } from 'react'
import firebase from '../utils/fisebase'
import Todo from './Todo'

function TodoList() {
    const [todoLists, setTodoList] = useState()

    useEffect(() => {
        const todoRef = firebase.database().ref('TodoLists')
        // Listen every time data change in todo ref
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const todoLists = []
            for (let id in todos) {
                todoLists.push({ id, ...todos[id] })
            }
            setTodoList(todoLists)
        })
    }, [])

    return (
        <div className="todo-list">
            {todoLists ? 
                todoLists.map((todo, index) => <Todo ket={index} todo={todo}/>) : ''}
        </div>
    )
}

export default TodoList
