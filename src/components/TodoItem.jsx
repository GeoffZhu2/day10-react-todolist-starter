import React from 'react';
import './TodoList.css';

const TodoItem = ({ id, text, done, onToggleDone, onDelete }) => {
    return (
        <div className="todo-row">
            <div
                className={`todo-item ${done ? 'done' : ''}`}
                onClick={() => onToggleDone(id)}
            >
                {text}
            </div>
            <button className="button-delete" onClick={() => onDelete(id)}>X</button>
        </div>
    );
};

export default TodoItem;