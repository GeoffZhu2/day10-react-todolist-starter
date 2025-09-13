import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css';

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState("")

    function toggleDone(id) {
        dispatch({type: 'DONE', id: id})
    }

    function toggleDelete(id) {
        dispatch({type: 'DELETE', id: id})
    }

    function addTodo() {
        if (newTodo.trim() !== "") {
            dispatch({type: 'ADD', text: newTodo});
            setNewTodo("");
        }
    }

    return (
        <div className={'todo-group'}>
            <h1>Todo List</h1>
            {
                state.map(({id, text, done}) => {
                    return <div className={'todo-row'}>
                        <div className={`todo-item ${done ? 'done' : ''}`}
                             onClick={() => toggleDone(id)}>{text}
                        </div>
                        <button className={'button-delete'} onClick={() => toggleDelete(id)}>X</button>
                    </div>
                })
            }
            <div className="todo-nav">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todoItem"
                />
                <button onClick={addTodo}>add</button>
            </div>
        </div>
    );
}

export default TodoList