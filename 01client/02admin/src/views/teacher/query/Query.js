import React from "react";
import "./Query.css";
import { List, Avatar, Input, Divider, Drawer, Col, Table, Tabs,Button } from "antd";
import net from "../../../utils/net";
import InfiniteScroll from 'react-infinite-scroller';
const { TabPane } = Tabs;

// const data = [
//   {
//     id: 1,
//     name: '张老师',
//     age: 22,
//     src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
//     introduce: "教java的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 2,
//     name: '李老师',
//     age: 22,
//     src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
//     introduce: "教java的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 3,
//     name: '王老师',
//     age: 22,
//     src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
//     introduce: "教JavaScript的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 4,
//     name: '黄老师',
//     age: 22,
//     src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3021031590,4288971877&fm=26&gp=0.jpg",
//     introduce: "教PHP的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 5,
//     name: '张老师',
//     age: 22,
//     src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3800569146,487832050&fm=26&gp=0.jpg",
//     introduce: "教c的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 6,
//     name: '李老师',
//     age: 22,
//     src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1916592768,2636827218&fm=26&gp=0.jpg",
//     introduce: "教java的老师",
//     email: 1111111111,
//     phone: 173894586,
//   },
//   {
//     id: 7,
//     name: '王老师',
//     age: 22,
//     src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
//     introduce: "教JavaScript的老师",
//     phone: 173894586,
//     email: 1111111111,
//   },
//   {
//     id: 8,
//     name: '王老师',
//     age: 22,
//     src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3064439120,2247550694&fm=26&gp=0.jpg",
//     introduce: "教JavaScript的老师",
//     phone: 173894586,
//     email: 1111111111,
//   },
// ];

function callback(key) {
  console.log(key);
}

export default class Query extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      data:[],
    };
  };


  searchTeacher = value => {
    //获得姓名
    let name = value;
    net.uploadFile(
      "teacherQuery",
      { name: name },
      function (ob) {
        if (ob != null) {

        }
      }
    );
  }
  // toTeacherAdd() {
  //   this.props.history.push(`/home/teacher/add`);
  // }
  componentDidMount() {
    let that = this;
    net.get("teachers", {}, function(ob) {
      that.setState({
        data: ob.data.object
      });
    });
  }
  render() {
    // const columns = [
    //   {
    //     title: '姓名',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a>{text}</a>,
    //   },
    //   {
    //     title: 'email',
    //     dataIndex: 'email',
    //     key: 'email',
    //   },
    //   {
    //     title: '年龄',
    //     dataIndex: 'age',
    //     key: 'age',
    //   }
    // ]
    //   {
    //     title: '电话',
    //     dataIndex: 'phone',
    //     key: 'phone',
    //   },
    //   {
    //     title: '介绍',
    //     dataIndex: 'introduce',
    //     key: 'introduce',
    //   },
    //   // {
    //   //   title: "操作",
    //   //   dataIndex: "action",
    //   //   key: "action",
    //   //   render: text => {
    //   //     return (
    //   //       <div>
    //   //         <Button
    //   //           style={{ backgroundColor: "1px solid #CCCCCC" }}
    //   //           onClick={this.toTeacherAdd.bind(this)}
    //   //         >
    //   //           管理
    //   //         </Button>
    //   //         <Divider type="vertical" />
    //   //       </div>
    //   //     );
    //   //   }
    //   // }
    // ];
    return (
      <div className="box">
        <div className="title1">师资列表</div>
        <div className="list">
        <List
    itemLayout="horizontal"
    dataSource={this.state.data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.tkey} />}
          
        />
        <List.Item.Meta
          
          title={<a href="https://ant.design">{item.name}</a>}
          
        />
        <List.Item.Meta
          
          description={item.introduce}
        />
      </List.Item>
    )}
  />
</div>
        {/* <Tabs defaultActiveKey="1" onChange={callback} type="card" className="tab">
          <TabPane tab="老师列表" key="1">
          
            <Table columns={columns} dataSource={this.state.teacherdata} className="tab1"/>
            
          </TabPane> */}
          {/* <TabPane tab="老师介绍" key="2">
            <div className="line">
              <div className="line_left"></div>
              <div className="mid">INTRODUCE</div>
              <div className="line_right"></div>
            </div>
            <div>
              {data.map(item => (

                <div className="f">

                  <img src={item.src} className="img"></img>
                  <div className="item1">
                    <div>
                      <span className="span1">姓名：</span>
                      <span className="span2">{item.name}</span>
                    </div>
                    <div>
                      <span className="span1">爱好：</span>
                      <span className="span2">222222222</span>
                    </div>
                    <div>
                      <span className="span1">荣誉：</span>
                      <span className="span2">222222222</span>
                    </div>
                  </div>
                  <div className="item2">
                    <div className="introduce">简介</div>
                    <div className="content">{item.introduce}</div>
                  </div>

                </div>


              ))}
            </div>
          </TabPane> */}
        {/* </Tabs> */}
      </div>
    );
  }
}
