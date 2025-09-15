import React from 'react';
import './TodoList.css';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Input} from "antd";

const TodoItem = ({todo, onToggleDone, onDelete}) => {
    return (
        <div className="todo-row">
            {/*<div*/}
            {/*    className={`todo-item ${todo.done ? 'done' : ''}`}*/}
            {/*    onClick={() => onToggleDone(todo.id)}*/}
            {/*>*/}
            {/*    {todo.text}*/}
            {/*</div>*/}
            <Input
                className={`todo-item ${todo.done ? 'done' : ''}`}
                placeholder="Basic usage"
                onClick={() => onToggleDone(todo.id)}
                value={todo.text}
            />
            <EditOutlined  className="button-edit" onClick={() => onDelete(todo.id)}/>
            <DeleteOutlined className="button-delete" onClick={() => onDelete(todo.id)}/>
        </div>
    );
};

export default TodoItem;