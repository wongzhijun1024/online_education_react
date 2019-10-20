import React from "react";
import "./Query.css";
import { List, Avatar,Input} from "antd";
import net from "../../../utils/net";
const { Search } = Input;
const data = [
  {
    name: '张老师',
    src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce:"教c的老师"
  },
  {
    name: '李老师',
    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce:"教java的老师"
  },
  {
    name: '王老师',
    src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce:"教JavaScript的老师"
  },
  {
    name: '黄老师',
    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce:"教PHP的老师"
  },
  {
    name: '张老师',
    src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
    introduce:"教c的老师"
  },
  {
    name: '李老师',
    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
    introduce:"教java的老师"
  },
  {
    name: '王老师',
    src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
    introduce:"教JavaScript的老师"
  },
  {
    name: '黄老师',
    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
    introduce:"教PHP的老师"
  },
];
export default class Query extends React.Component {
    constructor() {
      super();
      this.state = {
        searchList:[
          {
            src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
            name:"黄老师",
            instroduce:"教JavaScript的老师"
        }
        ],
      };
    };
    searchTeacher = value=>{
      //获得姓名
    let name = value;
    net.uploadFile(
      "teacherQuery",
      { name: name},
      function(ob) {
        if(ob != null ){

        }
      }
    );
    }
  render() {
    return (
      <div className="teacherQueryView">
        <h1>老师查询页面</h1>
        <Search
        placeholder="请输入你所要查询的老师的名字"
        enterButton="Search"
        size="large"
        onSearch={this.searchTeacher}
      />
      <div className = "teacherShow">查询结果</div>
        <div className = "showQuery">
         <img src = {this.state.searchList[0].src} />
          <div>{this.state.searchList[0].name}</div>
          <div>{this.state.searchList[0].instroduce}</div>
        </div>
        <div className = "teacherShow">部分老师的信息展示</div>
        <List
      className = "teacher-list flex"
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
      </div>
    );
  }
}
