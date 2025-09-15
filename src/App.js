import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, RouterProvider} from "react-router";
import {DefaultLayout} from "./layout/DefaultLayout";
import {TodoDetails} from "./components/TodoDetails";
import {ErrorPage} from "./components/ErrorPage";


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
