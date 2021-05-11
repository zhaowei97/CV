/*
 * @Author: your name
 * @Date: 2021-05-11 15:08:27
 * @LastEditTime: 2021-05-11 16:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume/src/App.tsx
 */
import { Layout } from "antd";

import InputInfoArea from "./components/InputInfoArea";
import "./App.css";

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Sider>
        <InputInfoArea />
        <div>111</div>
      </Sider>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
