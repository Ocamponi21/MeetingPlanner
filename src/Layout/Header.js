import { Layout, Space, Button } from 'antd';
import React from 'react';
const { Header, Footer, Sider, Content, Image } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: 'black',
    height: 78,
    paddingInline: 0,
    lineHeight: '64px',
    backgroundColor: '#FAEBD7',
};
const img = {
    size: 6,
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
// const App = () => (
//     <Space
//         direction="vertical"
//         style={{
//             width: '100%',
//         }}
//         size={[0, 48]}
//     >
//         <Layout>

//             <Header style={headerStyle}>Planner Buddy</Header>
//             <Content style={contentStyle}>
//                 <Button type="primary">
//                 <img src="https://th.bing.com/th/id/R.f0a8a96fc268cb06d2b86d7318d94b2c?rik=%2bcvmV4tAEsFumw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fstreamlineicons%2fstreamline-ux-free%2f512%2fradio-host-icon.png&ehk=PI9ZmXNJqpRfPwmnf%2busoPt5k8wgJdK2LZLl1UPSNlE%3d&risl=&pid=ImgRaw&r=0" />
//                 </Button>

//                 <Button type="primary">Participants</Button>
//                 <Button type="primary">Meeting</Button>

//             </Content>
//             <Footer style={footerStyle}>Meeding Scheduler @2023</Footer>
//         </Layout>

//     </Space>
// );
export default Header;