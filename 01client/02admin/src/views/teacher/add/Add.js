import React from "react";
import "./Add.css";
import { Upload, Input, Icon, Button, message, List, Avatar, Spin, Radio, Select } from "antd";
import net from "../../../utils/net";
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const { Option } = Select;
const { TextArea } = Input;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const data = [
  {
    id: 1,
    name: "张老师",
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce: "教c的老师"
  },
  {
    id: 2,
    name: "李老师",
    src:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce: "教java的老师"
  },
  {
    id: 3,
    name: "王老师",
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce: "教JavaScript的老师"
  },
  {
    id: 4,
    name: "黄老师",
    src:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce: "教PHP的老师"
  },
  {
    id: 5,
    name: "张老师",
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce: "教c的老师"
  },
  {
    id: 6,
    name: "李老师",
    src:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce: "教java的老师"
  },
  {
    id: 7,
    name: "王老师",
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce: "教JavaScript的老师"
  },
  {
    id: 8,
    name: "黄老师",
    src:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce: "教PHP的老师"
  }
];
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasMore: true,
      fileList: [],
      loading: false,
      subject: '',
      introduceText: '',
      teacherData:[],
    };
  }


  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    this.setState({ fileList: file });
    return isJpgOrPng && isLt2M;
  }
  handleChange(value) {
    this.setState({ subject: value });
  }
  displayAddForm() {
    this.refs.addform.style.display = "block";
    this.refs.opacity.style.display = "block";



  }
  addFormNone() {
    this.refs.addform.style.display = "none";
    this.refs.opacity.style.display = "none";
  }
  upload = e => {
    //获得姓名

    console.log(this.refs.inputIntroduce)
    let name = this.refs.inputName.state.value;//姓名
    let sexValue = this.refs.inputSex.state.value;//性别
    let subject = this.state.subject;//科目
    let introduce = this.state.introduceText;//介绍

    if (sexValue == 1) {
      let sex = "男";
    }
    else {
      let sex = "女";
    }


    let fileList = this.state.fileList;
    console.log(fileList);
    console.log("上传数据");
    net.uploadFile(
      "teacherAdd",
      { name: name, introduce: introduce, fileList: fileList[0] },
      function(ob) {
        console.log(ob);
      }
    );
  };
  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
    net.get("teachers",{},function(ob){
      console.log(ob.data);
    })
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });



  };
  handleChangeimg = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
  handleInfo = (e) => {
    this.setState({
      introduceText: e.target.value
    })
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
        <div className="opacity" ref="opacity"></div>
        <div className="box" ref="box">
          <div className="pageHeader">
            <h1 className="header_left">教师管理</h1>
            < div className="header_right" onClick={this.displayAddForm.bind(this)}>
              添加老师
          </div>
          </div>
      <div className="intro_title"></div>
          <div className="demo-infinite-container">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
            >
              <List
                dataSource={data}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.src} />
                      }
                      title={<a href="https://ant.design">{item.name}</a>}
                      description={item.introduce}
                    />
                    <div><button>删除</button></div>
                  </List.Item>
                )}
              >
                {this.state.loading && this.state.hasMore && (
                  <div className="demo-loading-container">
                    <Spin />
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </div>



        </div>
        {/* 老师添加 ******************************/}
        <div className="addForm" ref="addform">

          <h1>老师添加</h1>

          <div className="flex"><div>姓名：</div><Input placeholder="请输入姓名" className="input" ref="inputName" /></div>
          <div className="flex"><div>性别：</div> <Radio.Group name="radiogroup" defaultValue={1} ref="inputSex">
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </Radio.Group></div>
          <div className="flex"><div>选择科目：</div><Select defaultValue="java" style={{ width: 120 }} onChange={this.handleChange.bind(this)} ref="subject">
            <Option value="c">c</Option>
            <Option value="java">java</Option>
            <Option value="python"> python</Option>
            <Option value="PHP">PHP</Option>
            <Option value="PHP">javaScript</Option>
          </Select></div>


          <div>个人介绍：</div>
          <TextArea rows={2} ref="inputIntroduce" value={this.state.introduceText} onChange={this.handleInfo} />
          <div className="uploadImg">
            <div>请上传你的头像:</div>
            <Upload
              ref="uploadImg"
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload.bind(this)}
              onChange={this.handleChangeimg}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </div>

          <div className="button">
            <Button onClick={this.upload}>提交</Button>
            <Button
              type="primary"
              style={{ background: "red" }}
              onClick={this.addFormNone.bind(this)}
            >
              取消
            </Button>
          </div>
        </div>

      </div>

    );
  }
}












