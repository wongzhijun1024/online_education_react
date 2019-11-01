import React from "react";
import "./CourseInformation.css";
import { Upload, Input, Icon, Button,Radio,Select } from "antd";
import net from "../../utils/net";
const { Option } = Select;

export default class CourseInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      value: 0,
      teachers:[],
      teacherId:0,
      uplodeState:false
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  upload = () => {
    this.setState({
      uplodeState:true,
    });
    let that = this;
    //获得姓名
    let name = this.refs.courseName.state.value;
    //获得介绍
    let introduce = this.refs.instroduce.state.value;
    //获得文件的数据
    let fileList = this.state.fileList;
    // 获取状态值
    let state = this.state.value;
    // 获得老师的id
    let teacherId = this.state.teacherId;
    net.uploadFile(
      "courses/add",
      {
        name: name,
        introduce: introduce,
        state: state,
        teacherId: teacherId,
        ctype: 1,
        files: fileList,
        firstName:""
      },
      function(ob) {
        console.log(ob.code);
        if(ob.code==-1){
          alert("文件上传失败");
          that.setState({
             uplodeState:false,
         });
        }
        if(ob.code==1){
          alert("文件上传成功");
          that.setState({
             uplodeState:false,
         });
        }
      }
    );
  };

  componentDidMount(){
    let that = this;
    net.get("teachers",
            {},
            function(ob){
              let firstName = ob.data.object[0].name;
              that.setState({
                  teachers:ob.data.object,
                  firstName:firstName
              });
            }); 
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
   handleChangeTeacher=(value)=>{
      let teacherId = value;
      this.setState({
        teacherId:teacherId
      });
  }

 showTeacherOptions=()=>{

if(this.state.teachers.length<1)
     return;  
  let teacher = this.state.teachers;
     let teachers =  teacher.map(item=>{
               return (<Option key = {item.id} value={item.id}>
                      {item.name}
                      </Option>);
                      })
      return teachers;
  }
  render() {
    return (
      <div className = "coursesAdd-1">

    <div className = "addCourseList">
         <div className = "addCourseTitle">
           <span>课程信息</span>
           <Button  type="primary"  style = {{background:"#43BB60"}} onClick = {this.upload}>
           {this.state.uplodeState?(<span>文件上传中<Icon type="loading" /></span>):"保存"}
           </Button>
         </div>

         <div className = "addCourseBox">
           <label for = "title"><span style = {{color:"red",marginRight:"3px"}}>*</span>课程标题</label>
           <Input ref = "courseName"  placeholder="" id = "title" />
         </div>

         <div className = "addCourseBox">
           <label for = "title01">选择老师</label>
           <div>
             <Select defaultValue= "小刚" style={{ width: 120 }} onChange={this.handleChangeTeacher}>
                      {this.showTeacherOptions()}
             </Select>
           </div>
         </div>
        <div className = "addCourseBox">
           <label>连载状态</label>
           <div>
             <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={0}>非连载课程</Radio>
              <Radio value={1}>更新中</Radio>
              <Radio value={2}>已完结</Radio>
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

         <div className = "addCourseBox">
           <label for = "title02">课程简介</label>
           <Input ref = "instroduce" placeholder="" id = "title02" />
         </div>
        </div>
      </div>
    );
  }
}
