import React from 'react'
import Todo from '../components/Todo'

const TodoList = ({ todos, setTodos, filteredTodos}) => {
  return (
        <div class="todo-container">
            <ul class="todo-list">
              {filteredTodos.map((todo) => (
                <Todo 
                  todos ={todos} 
                  todo={todo} 
                  setTodos={setTodos}
                  text={todo.text} 
                  key={todo.id}/>
              ))}
            </ul>
        </div>
  )
}

export default TodoList