import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import User from "../../views/user/infor/User";
import UserQuery from "../../views/user/query/Query";
import TeacherQuery from "../../views/teacher/query/Query";
import TeacherAdd from "../../views/teacher/add/Add";
import ExaminationQuery from "../../views/examination/query/Query";
import ExaminationAdd from "../../views/examination/add/Add";
import ExaminationBank from "../../views/examination/bank/bank.js"
import CoursesList from "../../views/courses/list/CoursesList";
import CoursesAdd from "../../views/courses/add/CoursesAdd";
import Test from "../../views/test/Test";

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
          <Route exact path={"/home/examination/query"} component={ExaminationQuery} />
          <Route exact path={"/home/examination/add"} component={ExaminationAdd} />
          <Route exact path={"/home/courses/list"} component={CoursesList} />
          <Route exact path={"/home/test"} component={Test} />
          <Route path={"/home/courses/add"} component={CoursesAdd} />
          <Route exact path={"/home/teacher/query"} component={TeacherQuery} />
          <Route exact path={"/home/teacher/add"} component={TeacherAdd} />
          <Route exact path={"/home/user/query"} component={UserQuery} />
          <Route exact path={"/home/user/infor"} component={User} />
          <Route exact path={"/home/examination/bank"} component={ExaminationBank} />
        </Switch>
      </Content>
    );
  }
}
