import React from "react";
import "./CoursesAdd.css";
import {Tabs} from "antd";
import net from "../../../utils/net";
import CourseInformation from "../01components/courseInformation/CourseInformation.js";
import CourseTest from "../01components/courseTest/courseTest";
import CourseCreate from "../01components/courseCreate/courseCreate";
import CourseDocument  from "../01components/courseDocument/CourseDocument.js"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
const { TabPane } = Tabs;

export default class CoursesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      value: 0
    };
  }
   callback(key) {

    }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  
  render() {
    return (
      <div className = "coursesAdd">
        <Tabs className = "tabs" defaultActiveKey="1" onChange={this.callback.bind(this)}>
          <TabPane className = "courseTabs" tab="课程文件" key="1">
             <CourseDocument></CourseDocument>
          </TabPane>
          <TabPane tab="课程信息" key="2">
            <CourseInformation></CourseInformation>
          </TabPane>
          <TabPane tab="课程试卷" key="3">
            <Switch>
              <Route exact path={`${this.props.match.path}`} component={CourseTest}></Route>
              <Route exact path={`${this.props.match.path}/created`} component={CourseCreate}></Route>
            </Switch>
          </TabPane>
          <TabPane tab="课程题库" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
