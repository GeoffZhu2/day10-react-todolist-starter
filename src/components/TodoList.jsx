import React, {useReducer} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import './TodoList.css';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import {initialState, todoReducer} from "../reducers/todoReducer";
import {deleteTodos, updateTodos} from "../apis/api";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const toggleDone = async (id, todo) => {
        const updatedTodo = {...todo, done: !todo.done};
        try {
            await updateTodos(id, updatedTodo);
            dispatch({type: 'DONE', id});
        } catch (error) {
            console.error("Failed to toggle todo status:", error);
        }
    }
    const deleteTodo = async (id) => {
        try {
            await deleteTodos(id);
            dispatch({type: 'DELETE', id});
        } catch (error) {
            console.error("删除 todo 失败:", error);
        }
    }
    const addTodo = todo => dispatch({type: 'ADD', ...todo});

    return (
        <div className={'todo-group'}>
            <TodoContext.Provider value={{state, dispatch}}>
                <h1>Todo List</h1>
                <TodoGroup
                    onToggleDone={toggleDone}
                    onDelete={deleteTodo}
                />
                <TodoGenerator onAdd={addTodo}/>
            </TodoContext.Provider>
        </div>
    );
}

export default TodoList