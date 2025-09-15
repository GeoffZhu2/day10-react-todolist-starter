import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);

    const toggleDone = id => dispatch({ type: 'DONE', id });
    const deleteTodo = id => dispatch({ type: 'DELETE', id });
    const addTodo = text => dispatch({ type: 'ADD', text });

    return (
        <div className={'todo-group'}>
            <h1>Todo List</h1>
            <TodoGroup
                todos={state}
                onToggleDone={toggleDone}
                onDelete={deleteTodo}
            />
            <TodoGenerator onAdd={addTodo} />
        </div>
    );
}

export default TodoList