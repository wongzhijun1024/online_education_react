import React from "react";
import "./Add.css";
import { Upload, Input, Icon, Button } from "antd";
import net from "../../../utils/net";
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }

  beforeUpload = file => {
    //获得文件列表
    let fileList = this.state.fileList;
    //把当前的文件添加到列表
    fileList[fileList.length] = file;
    //保存当前的数据
    this.setState({
      fileList: fileList
    });
    return false;
  };
  upload = e => {
    //获得姓名
    let name = this.refs.nameInput.state.value;
    //获得介绍
    let introduce = this.refs.introduceInput.state.value;
    //获得文件的数据
    let fileList = this.state.fileList;
    net.uploadFile(
      "teacherAdd",
      { name: name, introduce: introduce, fileList: fileList[0] },
      function(ob) {
        console.log(ob);
      }
    );
  };

  render() {
    return (
      <div className="addView">
        <Input ref="nameInput" placeholder="请输入姓名" width={300} />
        <Input ref="introduceInput" placeholder="请输入介绍" width={300} />
        <Upload beforeUpload={this.beforeUpload} showUploadList={false}>
          <Button>
            <Icon type="upload" /> 选择老师头像
          </Button>
        </Upload>
        <Button onClick={this.upload}>提交</Button>
      </div>
    );
  }
}
