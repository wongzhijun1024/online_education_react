/* eslint-disable eqeqeq */
import React from "react";
import { Table, Divider, Button, Select, Icon } from "antd";
import "./CourseListCpt.css";
import net from "../../../../utils/net";
import { Link } from "react-router-dom";

export default class MyUserAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }
  showProps() {
    console.log(this.props.match.path);
  }
  deletUser(courseId) {
    let data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].courseId == courseId) {
        data.splice(i, 1);
        break;
      }
    }

    this.setState({ data: data });
  }
  componentDidMount() {
    let that = this;
    net.get("courses/all", {}, function(ob) {
      that.setState({
        courses: ob.data.object
      });
    });
  }
  toCoursesAdd() {
    this.props.props.history.push(`/home/courses/add`);
  }
  // 已发布个数
  releasedNum() {
    var releasedNum = 0;
    var courses = this.state.courses;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].state == 2) {
        releasedNum++;
      }
    }
    return releasedNum;
  }
  // 更新中个数
  updatingNum() {
    var updatingNum = 0;
    var courses = this.state.courses;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].state == 1) {
        updatingNum++;
      }
    }
    return updatingNum;
  }
  // 未发布个数
  unreleasedNum() {
    var unreleasedNum = 0;
    var courses = this.state.courses;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].state == 0) {
        unreleasedNum++;
      }
    }
    return unreleasedNum;
  }
  render() {
    const columns = [
      {
        title: "课程编号",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "课程状态",
        dataIndex: "state",
        key: "state",
        render: text => {
          if (text == 0) {
            return "未发布";
          } else if (text == 1) {
            return "更新中";
          } else if (text == 2) {
            return "已发布";
          }
        }
      },
      {
        title: "名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "介绍",
        dataIndex: "introduce",
        key: "introduce"
      },
      {
        title: "课程视频",
        dataIndex: "video",
        key: "video"
      },
      {
        title: "操作",
        dataIndex: "action",
        key: "action",
        render: text => {
          return (
            <div>
              <Button
                style={{ backgroundColor: "1px solid #CCCCCC" }}
                onClick={this.toCoursesAdd.bind(this)}
              >
                管理
              </Button>
              <Divider type="vertical" />
              <Button>删除</Button>
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <div className="textMul">
          <span>
            课程：
            <strong className="mulNum">{this.state.courses.length}</strong>个
          </span>
          <span>
            已发布：
            <strong className="mulNum">{this.releasedNum()}</strong>个
          </span>
          <span>
            更新中：
            <strong className="mulNum">{this.updatingNum()}</strong>个
          </span>
          <span>
            未发布：
            <strong className="mulNum">{this.unreleasedNum()}</strong>个
          </span>
        </div>

        <Table
          dataSource={this.state.courses}
          columns={columns}
          style={{
            width: "100%",
            margin: "0 auto",
            position: "relative"
          }}
          pagination={{ pageSize: 12, position: "right" }}
        />
      </div>
    );
  }
}
