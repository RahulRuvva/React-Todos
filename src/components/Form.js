import React, { useState } from 'react'



const Form = ({setInputValue,inputValue, todos, setTodos, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputValue(e.target.value)
  }

const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([
    ...todos, {text: inputValue, completed: false, id: Math.random()*1000}
  ])
  setInputValue('')

}  

const filterHandler = (e) => {
  setStatus(e.target.value)
  if(e.target.value === 'all'){
    setTodos(todos)
  }
  if(e.target.value === 'completed')
  {
    setTodos(todos.filter((eachTodo) => eachTodo.completed === true))
  }
  if(e.target.value === 'uncompleted')
  {
    setTodos(todos.filter((eachTodo) => eachTodo.completed === false ))
  }
}

  
  return (
    <div>
        <form>
            <input value={inputValue} onChange={inputTextHandler}  type="text" class="todo-input" />
            <button onClick={submitTodoHandler} class="todo-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select onClick={filterHandler}  name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        
    </div>
  )
}

export default Form