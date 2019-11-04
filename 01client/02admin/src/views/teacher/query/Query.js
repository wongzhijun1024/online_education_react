import React from "react";
import "./Query.css";
import { List, Avatar, Input, Divider, Drawer, Col, Table, Tabs,Button } from "antd";
import net from "../../../utils/net";
const { TabPane } = Tabs;
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
  componentDidMount() {
    let that = this;
    net.get("teachers", {}, function(ob) {
      that.setState({
        data: ob.data.object
      });
    });
  }
  render() {

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
