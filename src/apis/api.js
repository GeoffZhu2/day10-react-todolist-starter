import axios from "axios";

const instance = axios.create({
    baseURL: "https://68c78d205d8d9f51473226c2.mockapi.io/api"
});

export const getTodos = async () => {
    return instance.get("/todos");
}

export const addTodos = async (todo) => {
    return instance.post("/todos", todo);
}

export const deleteTodos = async (id) => {
    return instance.delete(`/todos/${id}`);
}
export const updateTodos = async (id, todo) => {
    return instance.put(`/todos/${id}`, todo);
}

instance.interceptors.request.use(
    (config) => {
        // request configuration
        console.log("request success", config)
        config.metadata = {
            startTime: Date.now()
        }
        return config;
    },
    error => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => {
        // handle response
        console.log("response success", response)
        console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) +'ms')
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        if (status === 401) {
            alert(`response Error ${status} ${data}`)
            window.location.href = '/';
            // do something
        } else {
            alert(`response Error ${status} ${data}`)
        }
        return Promise.reject(error);
    }
);