import React from 'react';
import './App.css';
import Todos from './todos/Todos';
import AddTodo from './todos/AddTodo';

function App() {
  return (
    <div className="todos">
      <Todos ></Todos> 
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
