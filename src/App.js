import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li>Todo List</li>
                    <li><NavLink to={'/about'}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>xxx</h1>
            <Outlet></Outlet>
        </main>
        <footer>footer copyright</footer>
    </>
}
const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [{
                path: '',
                element: <h1>Home Page</h1>
        }, {
                path: 'about',
                element: <h1>About Us</h1>
            }]
    }
]
const router = createBrowserRouter(routes);
function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch};
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
