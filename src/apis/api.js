import axios from "axios";

const instance = axios.create({
    baseURL: "https://68c78d205d8d9f51473226c2.mockapi.io/api/"
});

export const getTodos = async () => {
    return instance.get("todos");
}

export const addTodos = async (todo) => {
    return instance.post("todos", todo);
}

export const deleteTodos = async (id) => {
    return instance.delete(`todos/${id}`);
}
export const updateTodos = async (id, todo) => {
    return instance.put(`todos/${id}`, todo);
}