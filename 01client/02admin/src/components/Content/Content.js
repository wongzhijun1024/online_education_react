import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import User from "../../views/user/infor/User";
import UserQuery from "../../views/user/query/Query";
import TeacherQuery from "../../views/teacher/query/Query";
import TeacherAdd from "../../views/teacher/add/Add";
import VideoQuery from "../../views/video/list/Query";
import VideoAdd from "../../views/video/add/Add";
import ExaminationQuery from "../../views/examination/query/Query";
import ExaminationAdd from "../../views/examination/add/Add";
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
          <Route exact path={"/home/video/query"} component={VideoQuery} />
          <Route exact path={"/home/video/add"} component={VideoAdd} />
          <Route exact path={"/home/video/query"} component={VideoQuery} />
          <Route exact path={"/home/video/add"} component={VideoAdd} />
          <Route exact path={"/home/examination/query"} component={ExaminationQuery} />
          <Route exact path={"/home/examination/add"} component={ExaminationAdd} />
          <Route exact path={"/home/teacher/query"} component={TeacherQuery} />
          <Route exact path={"/home/teacher/add"} component={TeacherAdd} />
          <Route exact path={"/home/user/query"} component={UserQuery} />
          <Route exact path={"/home/user/infor"} component={User} />
        </Switch>
      </Content>
    );
  }
}
