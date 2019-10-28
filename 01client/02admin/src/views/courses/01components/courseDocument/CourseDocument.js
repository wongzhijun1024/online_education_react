import React from "react";
import "./CourseDocument.css";
import {Icon, Button,Table,Select,Input,Upload,TreeSelect} from "antd";
import net from "../../../../utils/net";
const { Option } = Select;
const { TreeNode } = TreeSelect;

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
        title: '课程介绍',
        dataIndex: 'introduce',
        render:text =><Select defaultValue="lucy" style={{ width: 120 }} >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                  </Select>
    },
    ];
    const data = [
    {
        key: '1',
        name: 'John Brown',
        introduce: 'New York No. 1 Lake Park'
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
      courseSection:"",
      values:undefined
    };
  }

  // handleChange01(value) {
  //     console.log(`selected ${value}`);
  //   }

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
    //章节id
    let chapterId = 1;
    // 章节顺序
    let order = 0
    net.uploadFile(
      "addVideo",
      {
        name: fileName,
        order: order,
        chapterId:chapterId,
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

onChangeCourse = value => {
    console.log(value);
    this.setState({ values: value});
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
                 <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.values}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="c语言"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChangeCourse}
                  >
                  <TreeNode value="c语言" title="c语言" key="0-1">
                    <TreeNode value="第一章" title="第一章" key="0-1-1">
                      <TreeNode value="第一小节" title="第一小节" key="random" />
                      <TreeNode value="第二小节" title="第二小节" key="random1" />
                    </TreeNode>
                    <TreeNode value="第二章" title="第二章" key="random2">
                      <TreeNode value="第一小节" title="第一小节" key="random3" />
                    </TreeNode>
                  </TreeNode>
                </TreeSelect>
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
