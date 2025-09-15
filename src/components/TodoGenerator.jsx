import React, { useState } from 'react';

const TodoGenerator = ({ onAdd }) => {
    const [value, setValue] = useState('');
    const handleAdd = () => {
        const trimmed = value.trim();
        if (trimmed) {
            onAdd(trimmed);
            setValue('');
        }
    };
    const handleKey = (e) => {
        if (e.key === 'Enter') handleAdd();
    };
    return (
        <div className="todo-nav">
            <input
                type="text"
                value={value}
                placeholder="Add a new todoItem"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
            />
            <button onClick={handleAdd}>add</button>
        </div>
    );
};

export default TodoGenerator;