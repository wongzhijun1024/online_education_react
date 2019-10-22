import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import User from "../../views/user/infor/User";
import UserQuery from "../../views/user/query/Query";
import TeacherQuery from "../../views/teacher/query/Query";
import TeacherAdd from "../../views/teacher/add/Add";
import VideoAdd from "../../views/video/add/Add";
import Release from "../"
const { Content } = Layout;
export default class MyContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Content className="contentBox">
        <Switch>
          <Route exact path={"/home/video/add"} component={VideoAdd} />
          <Route exact path={"/home/teacher/query"} component={TeacherQuery} />
          <Route exact path={"/home/teacher/add"} component={TeacherAdd} />
          <Route exact path={"/home/user/query"} component={UserQuery} />
          <Route exact path={"/home/user/infor"} component={User} />
        </Switch>
      </Content>
    );
  }
}
