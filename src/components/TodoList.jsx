import React, {useReducer} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import './TodoList.css';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import {initialState, todoReducer} from "../reducers/todoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch};

    const toggleDone = id => dispatch({type: 'DONE', id});
    const deleteTodo = id => dispatch({type: 'DELETE', id});
    const addTodo = text => dispatch({type: 'ADD', text});

    return (
        <div className={'todo-group'}>
            <TodoContext.Provider value={value}>
                <h1>Todo List</h1>
                <TodoGroup
                    todos={state}
                    onToggleDone={toggleDone}
                    onDelete={deleteTodo}
                />
                <TodoGenerator onAdd={addTodo}/>
            </TodoContext.Provider>

        </div>
    );
}

export default TodoList