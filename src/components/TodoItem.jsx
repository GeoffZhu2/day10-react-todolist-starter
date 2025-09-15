import React, {useState} from 'react';
import './TodoList.css';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Input} from "antd";
import UpdateModal from "./updateModal";

const TodoItem = ({todo, onToggleDone, onDelete, onEdit}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleEdit = () => {
        setEditValue(todo.text);
        setIsModalOpen(true);
    };
    return (
        <div className="todo-row">
            <Input
                className={`todo-item ${todo.done ? 'done' : ''}`}
                placeholder="Basic usage"
                onClick={() => onToggleDone(todo.id)}
                value={todo.text}
            />
            <EditOutlined className="button-edit" onClick={handleEdit}/>
            <DeleteOutlined className="button-delete" onClick={() => onDelete(todo.id)}/>
            <UpdateModal
                isModalOpen={isModalOpen}
                editValue={editValue}
                onChange={setEditValue}
                onOk={() => {
                    onEdit(todo.id, editValue);
                    setIsModalOpen(false);
                }}
                onCancel={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default TodoItem;