import React from 'react'
import Todo from '../components/Todo'

const TodoList = () => {
  return (
        <div class="todo-container">
            <ul class="todo-list">
              <Todo />
            </ul>
        </div>
  )
}

export default TodoList