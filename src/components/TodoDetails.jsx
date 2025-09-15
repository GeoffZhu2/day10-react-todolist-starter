import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodos} from "../apis/api";
import {Button, Card, Descriptions, Tag} from "antd";

export function TodoDetails() {
    const {key: id} = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await getTodos();
                const todoItem = response.data.find((item) => item.id === id);
                setTodo(todoItem);
            } catch (error) {
                console.error("Failed to fetch todo details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTodo();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!todo) {
        return <h1>Todo not found</h1>;
    }

    return (
        <div className="todo-details-container">
            <Card title="Todo Details"
                  style={{
                      margin: 16,
                      width: '50%',
                      minWidth: 300,
                      maxWidth: 500,
                  }}>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="ID">
                        {todo.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Text">
                        {todo.text}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                        <Tag color={todo.done ? "green" : "orange"}>
                            {todo.done ? "已完成" : "未完成"}
                        </Tag>
                    </Descriptions.Item>
                </Descriptions>
                <Button
                    type="primary"
                    style={{marginTop: 16}}
                    onClick={() => navigate('/todos')}
                >
                    Back to Todo List
                </Button>
            </Card>
        </div>
    );
}