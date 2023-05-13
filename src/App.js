import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputValue, setInputValue] = useState('');
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Today's Bible verses</h1>
      </header>
      <Form inputValue={inputValue} todos={todos} setTodos={setTodos} setInputValue={setInputValue}/>
      <TodoList/>
    </div>
  );
}

export default App;
