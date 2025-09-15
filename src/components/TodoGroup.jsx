import React, {useContext, useEffect} from 'react';
import TodoItem from './TodoItem';
import {getTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";

const TodoGroup = ({onToggleDone, onDelete}) => {
    const {state, dispatch} = useContext(TodoContext)
    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'LOAD_TODOS', todos: response.data})
        }).catch(error => {
            console.error("加载 todo 失败:", error);
        });
    }, [dispatch]);

    if (!state.length) {
        return <p>Add the things you need to do today...</p>;
    }

    return (
        <>
            {state.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleDone={onToggleDone}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default TodoGroup;