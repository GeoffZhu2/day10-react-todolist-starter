import React from 'react';
import './TodoList.css';

const TodoItem = ({todo, onToggleDone, onDelete}) => {
    return (
        <div className="todo-row">
            <div
                className={`todo-item ${todo.done ? 'done' : ''}`}
                onClick={() => onToggleDone(todo.id)}
            >
                {todo.text}
            </div>
            <button className="button-delete" onClick={() => onDelete(todo.id)}>X</button>
        </div>
    );
};

export default TodoItem;