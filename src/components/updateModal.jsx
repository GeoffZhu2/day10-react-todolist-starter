import React from 'react';
import {Modal} from "antd";
import TextArea from "antd/es/input/TextArea";

const UpdateModal = ({isModalOpen, editValue, onChange, onOk, onCancel}) => {
    return (
        <Modal
            title="Edit Todo"
            open={isModalOpen}
            onOk={onOk}
            onCancel={onCancel}
        >
            <TextArea
                value={editValue}
                onChange={(e) => onChange(e.target.value)}
                rows={10}
            />
        </Modal>
    );
};

export default UpdateModal;