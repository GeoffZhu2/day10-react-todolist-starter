import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/todos'}>Todo List</NavLink></li>
                    <li><NavLink to={'/about'}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>footer copyright</footer>
    </>
}
function ErrorPage() {
    return <h1>Error Page</h1>
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
