import './App.css';
import TodoList from "./components/TodoList";
import {HomeOutlined} from '@ant-design/icons';
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {Layout, Menu} from 'antd';
const { Header, Footer, Content } = Layout;

function DefaultLayout() {
    const items = [
        {
            key: 'home',
            label: (<NavLink to={'/'}>Home</NavLink>),
            icon: <HomeOutlined />
        },
        {
            key: 'todos',
            label: (<NavLink to={'/todos'}>Todo List</NavLink>)
        },
        {
            key: 'about',
            label: (<NavLink to={'/about'}>About Us</NavLink>)
        }
        ]
    return (
        <Layout>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content>
                <Outlet></Outlet>
            </Content>
            <Footer>
                footer copyright
            </Footer>
        </Layout>
    )
}
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
