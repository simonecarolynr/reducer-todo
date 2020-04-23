import React, { useState } from 'react';


const TodoForm = props => {

    const [newTask, setNewTask] = useState('');

    const handleTodoChange = (event) => {
        setNewTask(event.target.value);
    }

    const onClickAdd = (event) => {
        event.preventDefault();
        props.dispatch({
            type: 'ADD_TODO',
            payload: newTask
        });    
    }

    const onClickClear = (event) => {
        event.preventDefault();
        props.dispatch({
            type: 'CLEAR'
        })
    }

    return (
        <form>
            <input
                onChange={handleTodoChange}
                type="text"
                name="todo"
                value={newTask}
                placeholder="...todo"
            />
            <button onClick={onClickAdd}>Add Todo</button>
            <button onClick={onClickClear}>Clear Todo</button>
        </form>
    )
}

export default TodoForm;