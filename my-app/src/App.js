import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/reducer-todo';
import './App.css';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoList dispatch={dispatch} state={state} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
