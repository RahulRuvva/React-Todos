import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputValue, setInputValue] = useState('');
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  return (
    <div className="App">
      <header>
        <h1>Today's Bible verses</h1>
      </header>
      <Form setStatus={setStatus} inputValue={inputValue} todos={todos} setTodos={setTodos} setInputValue={setInputValue}/>
      <TodoList todos={todos}  setTodos={setTodos}/>
    </div>
  );
}

export default App;
