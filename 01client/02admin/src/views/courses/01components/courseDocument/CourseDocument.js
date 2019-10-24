import React from "react";
import "./CourseDocument.css";
import {Icon, Button,Table,Select,Input,Upload} from "antd";
import net from "../../../../utils/net";
const { Option } = Select;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

    const columns = [
    {
        title: '文件名',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '章节',
        dataIndex: 'age',
    },
    {
        title: '课程介绍',
        dataIndex: 'address',
    },
    ];
    const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }
    ];


export default class CourseDocument extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      value: 0,
      courseName:"",
      courseChapter:"",
      courseSection:""
    };
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  upload = e => {
    //获得文件名
    let fileName = this.refs.fileName.state.value;
    //获得介绍
    let introduce = this.refs.fileIntroduction.state.value;
    console.log(fileName,introduce);
    //获得文件的数据
    let fileList = this.state.fileList;

    net.uploadFile(
      "courses/add",
      {
        name: fileName,
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

  addCourseFiles(){
      this.refs.background.style.display = "block";
      this.refs.addFiles.style.display = "block";

  };
  hideAddFiles = ()=>{
      this.refs.background.style.display = "none";
      this.refs.addFiles.style.display = "none";
  }

  handleChangeName=(value)=> {
    let courseName = value;
    this.setState = {
        courseName:courseName,
    }
};
    handleChangeChapter=(value)=> {
    let Chapter = value;
    this.setState = {
        courseChapter:Chapter,
    }
};
    handleChangeSection=(value)=> {
    let section = value;
    this.setState = {
        courseSection:section,
    }
};

  render() {
    return (
      <div className = "coursesAdd-1">

    <div className = "addCourseList">
         <div className = "addCourseTitle">
           <span>课程文件</span>
           <Button onClick = {this.addCourseFiles.bind(this)} type="primary" style = {{background:"#43BB60"}}>添加课程文件</Button>
         </div>

         <div className = "addCourseBox">
           <Table className = "courseTable"
            rowSelection={rowSelection} 
            columns={columns} 
            dataSource={data}
           pagination={{ pageSize: 12, position: "right" }}
           />
         </div>
         {/* 文件上传 */}
        <div className = "backgroundFiles" ref = "background"></div>
        <div className = "addCourseFiles" ref = "addFiles">
            <div className = "addCourseFilesTitle">
                <span>上传文件</span>
                <Icon style = {{color:"#CCCCCC"}} type="close" onClick = {this.hideAddFiles}/>
            </div>
            <div className = "addCourseFilesName">
                <label>选择课程类型</label>
                <div className = "selectFilesType">
                <Select defaultValue="C++课程" style={{ width: 120 }} onChange={this.handleChangeName}>
                    <Option value="C++课程">C++课程</Option>
                    <Option value="数据结构">数据结构</Option>
                    <Option value="算法课程">算法课程</Option>
                </Select>
                <Select defaultValue="第一章" style={{ width: 120 }} onChange={this.handleChangeChapter}>
                    <Option value="第一章">第一章</Option>
                    <Option value="第二章">第二章</Option>
                    <Option value="第三章">第三章</Option>
                </Select>
                <Select defaultValue="基本语法" style={{ width: 120 }} onChange={this.handleChangeSection}>
                    <Option value="基本语法">基本语法</Option>
                    <Option value="注释">注释</Option>
                    <Option value="变量声明">变量声明</Option>
                </Select>
            </div>
            </div>
            <div className = "addCourseFilesName">
                <label for="file01">添加课程文件名</label>
                <Input ref = "fileName" id = "file01" placeholder="" />
            </div>
            <div className = "addCourseFilesName">
                <label for="file02">课程文件介绍</label>
                <Input ref = "fileIntroduction" id = "file02" placeholder="" />
            </div>

            <div className = "addCourseFilesName">
                <label for="file02">选择视频文件</label>
                <div className = "selectFilesType">
                    <Upload onRemove={this.removeFile} beforeUpload={this.beforeUpload}>
                        <Button>
                        <Icon type="upload" /> 选择视频文件
                        </Button>
                    </Upload>
                </div>
            </div>
        <div style = {{width:"100%",textAlign:"center"}}>
         <Button  type="primary" onClick={this.upload} style={{ marginTop: 16,background:"#43BB60"}}>
          上传课程文件
        </Button>
        </div>
        </div>
        <div className = "deleteFiles">
        <Button  type="primary" onClick={this.upload} style={{ marginTop: 16,background:"red"}}>
          删除文件
        </Button>
        </div>
        
        

        </div>
      </div>
    );
  }

}
