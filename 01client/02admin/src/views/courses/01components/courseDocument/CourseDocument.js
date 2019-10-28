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
        render: text =>text,
    },
    {
        title: '章节',
        dataIndex: 'chapters',
        render:chapters =>{
          if(chapters.length<1){
              return;
          }
          let firstName = chapters[0].name
          return(
              <Select defaultValue= {firstName} style={{ width: 120 }} >
                {
                  chapters.map(function(item){
                      return(
                      <Option value={item.name}>{item.name}</Option>
                      )
                  })
                }
              </Select>
          );
        }
    },
    {
        title: '课程介绍',
        dataIndex: 'introduce',
        render: text =>text,
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
      values:undefined,
      allLeaf:[],
      chapterId:null,
    };
  }

  componentDidMount(){
    let that = this;
      net.get("courses/all/leaf",
        {},
        function(ob){
          that.setState({
            allLeaf:ob.data.object,
          }); 
        });
  }

  onChange = e => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  upload = e => {
    //获得文件名
    let fileName = this.refs.fileName.state.value;
    //获得介绍
    let introduce = this.refs.fileIntroduction.state.value;
    //获得文件的数据
    let fileList = this.state.fileList;
    //章节id
    let chapterId = 13;
    // 章节顺序
    let order = 0
    net.post(
      "video/add",
      {
        name: fileName,
        chapterId:chapterId,
        files: fileList,
        order: order
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


onChangeCourse = (value) => {
    this.setState({ values: value});
    if(isNaN(value)){
      return;
    }
    this.setState({
      chapterId:Number(value)
    });
    console.log(this.state.chapterId);
  };

 showTreeList=()=>{
    let allLeaf = this.state.allLeaf;
    let length = allLeaf.length;
    if(length < 1){
      return;
    }
    let allLeafs = allLeaf.map(function(item){
      return (
        <TreeNode value={item.name} title={item.name} key={item.id}>
          {item.chapters.map(function(item1){
            return(
              <TreeNode  value={item1.id} title={item1.name} key = {item1.id} > 
                  {
                    item1.videos.map(function(item2){
                      return(
                        <TreeNode value={item2.name} title={item2.name} key={item2.id} />
                      )
                    })
                  }
              </TreeNode>
            );
          })}
        </TreeNode>
      );
    });
    return allLeafs;
 }

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
            dataSource={this.state.allLeaf}
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
                    {this.showTreeList()}
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
