import React, { useState, useReducer} from 'react'
import './App.css';
import Todo from './components/Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function render(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.item)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id != action.payload.id)
    default:
      return todos
  }
}

function newTodo(item) {
  return {
    id: Date.now(),
    item: item,
    completed: false
  }
}

function App() {
  const [item, setItem] = useState('')
  const [todos, dispatch] = useReducer(render, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item: item } })
    setItem('')
  }

  return (
    <div className="App">
      <header>WELCOME TO TODO LISTS</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new list ..."
          value={item}
          onChange={e => setItem(e.target.value)}
        />
      </form>
      <div className="todo-list">
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
      </div>
    </div>
  );
}
export default App;
