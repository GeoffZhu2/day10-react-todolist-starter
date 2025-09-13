import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css';

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)

    function toggleDone(id) {
        dispatch({type: 'DONE', id: id})
    }

    function toggleDelete(id) {
        dispatch({type: 'DELETE', id: id})
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
                        <button className={'button-delete'} onClick={()=>toggleDelete(id)}>X</button>
                    </div>
                })
            }
        </div>

    );
}

export default TodoList