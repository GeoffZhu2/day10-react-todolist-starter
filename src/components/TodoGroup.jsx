import React, {useContext, useEffect} from 'react';
import TodoItem from './TodoItem';
import {getTodos, updateTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";

const TodoGroup = ({onToggleDone, onDelete}) => {
    const {state, dispatch} = useContext(TodoContext)
    const handleEdit = async (id, newText) => {
        try {
            await updateTodos(id, {text: newText});
            dispatch({type: 'EDIT', id, text: newText});
        } catch (error) {
            console.error("Failed to update todo:", error);
        }
    };
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
                    onToggleDone={() => onToggleDone(todo.id, todo)}
                    onDelete={onDelete}
                    onEdit={handleEdit}
                />
            ))}
        </>
    );
};

export default TodoGroup;