import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import User from "../../views/user/infor/User";
import UserQuery from "../../views/user/query/Query";
import TeacherQuery from "../../views/teacher/query/Query";
import TeacherAdd from "../../views/teacher/add/Add";
import CoursesList from "../../views/courses/list/CoursesList";
import CoursesAdd from "../../views/courses/add/CoursesAdd";
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
          <Route exact path={"/home/courses/list"} component={CoursesList} />
          <Route exact path={"/home/courses/add"} component={CoursesAdd} />
          <Route exact path={"/home/teacher/query"} component={TeacherQuery} />
          <Route exact path={"/home/teacher/add"} component={TeacherAdd} />
          <Route exact path={"/home/user/query"} component={UserQuery} />
          <Route exact path={"/home/user/infor"} component={User} />
        </Switch>
      </Content>
    );
  }
}
