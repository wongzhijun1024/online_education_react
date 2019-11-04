import React from "react";
import "./CoursesList.css";
import { Button, Select, Input, Table, Tabs } from "antd";
import CourseListCpt from "../01components/CourseList/CourseListCpt";
export default class CoursesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    };
  }

  render() {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }

    return (
      <div className="courseBox">
        <div className="pageHeader">
          <h1 className="header_left">课程管理</h1>
          {/* <div className="header_right"> */}
            {/* <Button
              className="headerBtn"
              style={{ backgroundColor: "#5CB85C", color: "white" }}
            >
              创建课程
            </Button> */}
          {/* </div> */}
        </div>
        <div className="btnGroup">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="普通课程" key="1">
              <CourseListCpt props={this.props}></CourseListCpt>
            </TabPane>
            {/* <TabPane tab="班级课程" key="2">
              <CourseListCpt></CourseListCpt>
            </TabPane> */}
          </Tabs>
        </div>
      </div>
    );
  }
}
