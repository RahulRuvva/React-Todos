import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //state stuff
  const[inputValue, setInputValue] = useState('');
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const[filteredTodos, setFilteredTodos] = useState([]);

    //use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]) 
   //Functions 
  const filterHandler = () => {
    switch(status){
      case 'completed':
        console.log('completed');
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((eachTodo) => eachTodo.completed === false ))
        break;
      default:
        setFilteredTodos(todos)
        break;  
    }
   } 
  return (
    <div className="App">
      <header>
        <h1>Today's Bible verses</h1>
      </header>
      <Form 
        setFilteredTodos={setFilteredTodos} 
        setStatus={setStatus} 
        inputValue={inputValue}
       
        todos={todos} 
        setTodos={setTodos} 
        setInputValue={setInputValue}
      
        />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
