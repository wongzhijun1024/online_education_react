import React from "react";
import "./CoursesAdd.css";
import { Upload, Input, Icon, Button, Row, Col,Radio} from "antd";
import net from "../../../utils/net";
export default class CoursesAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      value: 1
    };
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  upload = e => {
    //获得姓名
    let name = "小明";
    //获得介绍
    let introduce = "获得介绍";
    //获得文件的数据
    let fileList = this.state.fileList;

    net.uploadFile(
      "teacherAdd",
      {
        name: name,
        introduce: introduce,
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
        <div className = "coursesSelect">
          <span>课程信息
            <div className = "Selected"></div>
          </span>
          <span>课程文件</span>
          <span>课程试卷</span>
          <span>课程题库</span>
        </div>
        <div className = "addCourseList">
         <div className = "addCourseTitle">
           <span>课程信息</span>
           <Button  type="primary" style = {{background:"#43BB60"}}>发布课程</Button>
         </div>

         <div className = "addCourseBox">
           <label for = "title"><span style = {{color:"red",marginRight:"3px"}}>*</span>课程标题</label>
           <Input placeholder="Basic usage" id = "title" />
         </div>

         <div className = "addCourseBox">
           <label for = "title01">课程副标题</label>
           <Input placeholder="Basic usage" id = "title01" />
         </div>
        <div className = "addCourseBox">
           <label>连载状态</label>
           <div>
             <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>非连载课程</Radio>
              <Radio value={2}>更新中</Radio>
              <Radio value={3}>已完结</Radio>
            </Radio.Group>
           </div>
         </div>

         <div className = "addCourseBox">
           <label>封面图片</label>
           <div>
             <Upload onRemove={this.removeFile} beforeUpload={this.beforeUpload}>
            <Button>
            <Icon type="upload" /> Select File
             </Button>
           </Upload>
           <div>请上传jpg, gif, png格式的图片, 建议图片尺寸为 480×270px。建议图片大小不超过2MB。</div>
           </div>
         </div>



        </div>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Upload onRemove={this.removeFile} beforeUpload={this.beforeUpload}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button type="primary" onClick={this.upload} style={{ marginTop: 16 }}>
          上传文件
        </Button>
      </div>
    );
  }
}
