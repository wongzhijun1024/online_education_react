import React from "react";
import "./Add.css";
import { Upload, Input, Icon, Button, message, List, Avatar } from "antd";
import net from "../../../utils/net";
const data = [
  {
    name: "张老师",
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce: "教c的老师"
  },
  {
    name: "李老师",
    src:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce: "教java的老师"
  },
  {
    name: "王老师",
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce: "教JavaScript的老师"
  },
  {
    name: "黄老师",
    src:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce: "教PHP的老师"
  },
  {
    name: "张老师",
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce: "教c的老师"
  },
  {
    name: "李老师",
    src:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce: "教java的老师"
  },
  {
    name: "王老师",
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce: "教JavaScript的老师"
  },
  {
    name: "黄老师",
    src:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce: "教PHP的老师"
  }
];
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      loading: false
    };
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
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

    console.log("上传数据");
    net.uploadFile(
      "teacherAdd",
      { name: name, introduce: introduce, files: fileList[0] },
      function(ob) {
        console.log(ob);
      }
    );
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  displayAddForm() {
    this.refs.addform.style.display = "block";
    console.log(this.refs.addform)
  }
  addFormNone() {
    this.refs.addform.style.display = "none";
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <div className="addView">
        <div className="teacher-title flex">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg" />
          <span>老师添加页面以及老师风采</span>
        </div>
        {/* 老师风采，浏览老师 */}
        <div className="select">
          <Button
            style={{ marginRight: 10 + "px", background: "red" }}
            type="primary"
          >
            删除
          </Button>
          <Button type="primary" onClick={this.displayAddForm.bind(this)}>
            添加
          </Button>
        </div>
        <List
          className="teacher-list flex"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.src} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.introduce}
              />
            </List.Item>
          )}
        />
        {/*   老师添加 */}
        <div className="addForm" ref="addform">
          <div className="cancleBox">
            <Button
              type="primary"
              style={{ background: "red" }}
              onClick={this.addFormNone.bind(this)}
            >
              取消
            </Button>
          </div>
          <div className="teacher-name flex">
            <span>请输入您的姓名：</span>
            <Input
              className="input-name"
              ref="nameInput"
              placeholder="请输入姓名"
              width={300}
            />
          </div>
          <div className="teacher-name flex">
            <span>请输入您的介绍：</span>
            <Input
              className="input-name"
              ref="introduceInput"
              placeholder="请输入介绍"
              width={300}
            />
          </div>
          <div className="flex">
            <span>请上传你的头像:</span>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <Button onClick={this.upload}>提交</Button>
        </div>
      </div>
    );
  }
}
