import React from "react";
import "./Product.css";
import { Upload, Input, Icon, Button } from "antd";
import net from "../../utils/net";
export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }

  onRemove = file => {
    // //获得文件列表
    // let fileList = this.state.fileList;
    // //获得要删除文件的下标
    // const index = fileList.indexOf(file);
    // //根据下标删除文件
    // fileList.splice(index, 1);
    // //重新保存数据
    // this.setState({
    //   fileList: fileList
    // });
  };

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
    //获得输入框的数据
    let name = this.refs.nameInput.state.value;
    //获得文件的数据
    let fileList = this.state.fileList;
    net.uploadFile(
      "productAdd",
      { name: name, fileList: fileList[0] },
      function(ob) {
        console.log(ob);
      }
    );
  };
  render() {
    return (
      <div className="productView">
        <h1>产品提交页面</h1>
        <Input ref="nameInput" placeholder="请输入数据" />
        <Upload
          onRemove={this.onRemove}
          beforeUpload={this.beforeUpload}
          showUploadList={false}
        >
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button onClick={this.upload}>提交数据</Button>
      </div>
    );
  }
}
