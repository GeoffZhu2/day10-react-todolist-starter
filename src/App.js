import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {DefaultLayout} from "./layout/DefaultLayout";


function ErrorPage() {
    return <h1>Error Page</h1>
}

function TodoDetails() {
    const {key} = useParams()
    console.log(key)
    return <h1>This is : {key} Details</h1>
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [{
            path: '',
            element: <h1>Home Page</h1>
        }, {
            path: 'todos',
            element: <TodoList/>
        }, {
            path: 'todos/:key',
            element: <TodoDetails/>
        }, {
            path: 'about',
            element: <h1>About Us</h1>
        }]
    }
]
const router = createBrowserRouter(routes);

function App() {
    // the Hooks API manage component data state
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
