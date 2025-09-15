import React, {useState} from 'react';
import {addTodos} from "../apis/api";
import {Button, Input} from "antd";

const TodoGenerator = ({onAdd}) => {
    const [value, setValue] = useState('');

    const handleAdd = async () => {
        const trimmed = value.trim();
        if (!trimmed) {
            return;
        }
        const newTodo = {text: trimmed, done: false};
        try {
            const response = await addTodos(newTodo);
            onAdd(response.data);
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
            <Input
                placeholder="Add a new todoItem"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}/>
            <Button type="primary" onClick={handleAdd}>add</Button>
        </div>
    );
};

export default TodoGenerator;