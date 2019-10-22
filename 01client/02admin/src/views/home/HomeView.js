import React from "react";
import { Layout } from "antd";
import "./Home.css";
import Header from "../../components/Header/Header";
import Sider from "../../components/Sider/Sider";
import Content from "../../components/Content/Content";

// const { Footer } = Layout;
export default class HomeView extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}
