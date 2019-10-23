import React from "react";
import "./CoursesAdd.css";
import { Upload, Input, Icon, Button,Radio,Tabs} from "antd";
import net from "../../../utils/net";
import CourseInformation from "../01components/courseInformation/CourseInformation.js";
const { TabPane } = Tabs;

export default class CoursesAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      value: 0
    };
  }

   callback(key) {
  console.log(key);

    }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  upload = e => {
    //获得姓名
    let name = "小王";
    //获得介绍
    let introduce = "获得介绍";
    //获得文件的数据
    let fileList = this.state.fileList;

    net.uploadFile(
      "courses/add",
      {
        name: name,
        introduce: introduce,
        state: 1,
        teacherId: 0,
        ctype: 1,
        files: fileList
      },
      function(ob) {
        console.log(ob);
      }
    );
  };

  removeFile = file => {
    //获得文件的数据
    let fileList = this.state.fileList;
    //获得文件的下标
    const index = fileList.indexOf(file);
    //删除文件
    fileList.splice(index, 1);
    //覆盖数据
    this.setState({
      fileList: fileList
    });
  };

  beforeUpload = file => {
    console.log(file);
    //获得文件的数据
    let fileList = this.state.fileList;
    //添加文件
    fileList.push(file);
    //覆盖数据
    this.setState({
      fileList: fileList
    });
  };

  render() {
    return (
      <div className = "coursesAdd">

        <Tabs className = "tabs" defaultActiveKey="1" onChange={this.callback.bind(this)}>
          <TabPane className = "courseTabs" tab="课程信息" key="1">
            <CourseInformation></CourseInformation>
          </TabPane>
          <TabPane tab="课程文件" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="课程试卷" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="课程题库" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
