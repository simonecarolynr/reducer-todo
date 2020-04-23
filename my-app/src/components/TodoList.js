import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    const handleToggleComplete = (todo) => {
        props.dispatch({
            type: 'COMPLETED',
            payload: todo
        })
    }

    return (
      <div>
        {props.state.map(todo => (
          <Todo
            handleToggleComplete={handleToggleComplete}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    );
  };
  
  export default TodoList;