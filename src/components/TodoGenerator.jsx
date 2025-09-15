import React, {useState} from 'react';
import {addTodos} from "../apis/api";

const TodoGenerator = ({onAdd}) => {
    const [value, setValue] = useState('');

    const handleAdd = async () => {
        const trimmed = value.trim();
        if (!trimmed) {
            return;
        }
        const newTodo = {text: trimmed, done: false};
        try {
            await addTodos(newTodo);
            onAdd(trimmed);
            setValue('');
        } catch (error) {
            console.error("添加 todo 失败:", error);
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