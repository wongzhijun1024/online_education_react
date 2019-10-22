import React from "react";
import { Upload, Input, Icon, Button, Row, Col } from "antd";
import net from "../../utils/net";
export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }

  upload = e => {
    //获得文件的数据
    let fileList = this.state.fileList;

    net.uploadFile(
      "courses/add",
      {
        name: "数学",
        introduce: "好介绍",
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
      <div>
        <h1>测试</h1>
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
