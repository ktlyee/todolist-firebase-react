import React from 'react'
import './styles.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header>WELCOME TO TODO LISTS</header>
      <Form/>
      <TodoList/>
    </div>
  )
}

export default App;