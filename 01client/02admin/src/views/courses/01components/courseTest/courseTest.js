import React from "react";
import "./courseTest.css";
import { Icon, Button, Radio, Table, Upload, message } from "antd";
import net from "../../../../utils/net";
import CourseCreate from "../courseCreate/courseCreate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const columns = [
  {
    title: "名称",
    dataIndex: "name",
    render: text => <a>{text}</a>
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '题目统计',
    dataIndex: 'subject',
  },
  {
    title: '更新人/时间',
    dataIndex: 'adminTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
  }
];
const data = [];
export default class MyCourseTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
  }
  showImportBox() {
    this.refs.importBox.style.display = "block";
  };
  closeImportBox() {
    this.refs.importBox.style.display = "none";
  };

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };
    return (
      <div className="courseTestBox">
        <div className="testHeader">
          <h1 className="testTitle">课程试卷</h1>
          <div className="btnBox">
            <Link to={`/home/courses/add/created`}
              style={{ color: "white" }}>
              <Button
                style={{
                  backgroundColor: "#278BF5",
                  color: "white",
                  width: 100,
                  fontSize: "12px"
                }}
              >
                <Icon type="plus" />
                <span>创建试卷</span>
              </Button>
            </Link>
          </div>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          style={{ width: "98.5%", margin: "0 auto", margin: "10px" }}
          pagination={{ pageSize: 12, position: "right" }}
        />
        <Button style={{ backgroundColor: "#ECECEC" }}>删除</Button>
      </div>
    );
  }
}
