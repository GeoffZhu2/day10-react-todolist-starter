import React from 'react';
import TodoItem from './TodoItem';

const TodoGroup = ({ todos, onToggleDone, onDelete }) => {
    if (!todos.length) {
        return <p>Add the things you need to do today...</p>;
    }
    return (
        <>
            {todos.map(({ id, text, done }) => (
                <TodoItem
                    key={id}
                    id={id}
                    text={text}
                    done={done}
                    onToggleDone={onToggleDone}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default TodoGroup;