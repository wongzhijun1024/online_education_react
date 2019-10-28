import React from "react";
import { Table, Divider, Button, Select, Icon } from "antd";
import "./CourseListCpt.css";
import net from "../../../../utils/net";

export default class MyUserAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: []
    }
  };
  deletUser(courseId) {
    let data = this.state.data;
    console.log(courseId);
    for (let i = 0; i < data.length; i++) {
      console.log(data);

      if (data[i].courseId == courseId) {
        data.splice(i, 1);
        break;
      }
    }

    this.setState({ data: data });
  };
  componentDidMount() { 
    let that = this;
    net.get("courses/all",
      {},
      function (ob) { 
        console.log(ob);
        that.setState({
          courses: ob.data.object
        });
      }
    )
  };

  render() {
    const columns = [
      {
        title: '课程编号',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '课程状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '介绍',
        dataIndex: 'introduce',
        key: 'introduce',
      },
      // {
      //   title: '课程视频',
      //   dataIndex: 'video',
      //   key: 'video',
      // },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: text => {
          return (
            <div>
              <Button style={{ backgroundColor: "1px solid #CCCCCC" }}>管理</Button>
              <Divider type="vertical" />
              {/* <a onClick={this.deletUser.bind(this, text.courseId)}>删除</a> */}
            </div>
          );
        }
      }
    ];
    return (
      <div>
        <div className="textMul">
          <span>课程：
            <strong className="mulNum">19</strong>
            个
          </span>
          <span>已发布：
            <strong className="mulNum">18</strong>
            个
          </span>
          <span>已关闭：
            <strong className="mulNum">0</strong>
            个
          </span>
          <span>未发布：
            <strong className="mulNum">1</strong>
            个
          </span>
        </div>

        <Table
          dataSource={this.state.courses}
          columns={columns}
          style={{ width: "100%", margin: "0 auto", position: "relative" }}
          pagination={{ pageSize: 12, position: "right" }} />
      </div>
    );
  }
}

