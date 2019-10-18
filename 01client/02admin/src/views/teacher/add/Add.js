import React from "react";
import "./Add.css";
import { Upload, Input, Icon, Button,message} from "antd";
import net from "../../../utils/net";
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      loading: false,
    };
  }

  getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

  beforeUpload = file => {

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
       //获得文件列表
    let fileList = this.state.fileList;
    //把当前的文件添加到列表
    fileList[fileList.length] = file;
    //保存当前的数据
    this.setState({
      fileList: fileList
    });

    return isJpgOrPng && isLt2M;
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

    handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <div className="addView">
        <div className = "teacher-name">
        <Input className = "input-name" ref="nameInput" placeholder="请输入姓名" width={200} />
        </div>
        
        <Input ref="introduceInput" placeholder="请输入介绍" width={200} />
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>

        <Button onClick={this.upload}>提交</Button>
      </div>
    );
  }
}
