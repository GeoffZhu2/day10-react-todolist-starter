import {NavLink, Outlet} from "react-router";
import {HomeOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";

const {Header, Footer, Content} = Layout;

export function DefaultLayout() {
    const items = [
        {
            key: 'home',
            label: (<NavLink to={'/'}>Home</NavLink>),
            icon: <HomeOutlined/>
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
                    style={{flex: 1, minWidth: 0}}
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
export default DefaultLayout;