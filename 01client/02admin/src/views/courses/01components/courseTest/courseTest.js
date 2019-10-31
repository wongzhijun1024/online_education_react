import React from "react";
import "./courseTest.css";
import { Icon, Button, Radio, Table, Upload, message, Select } from "antd";
import net from "../../../../utils/net";
import CourseCreate from "../courseCreate/courseCreate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Option } = Select;
const newColumns = [
  { title: '课程名称', dataIndex: 'name', key: 'name' },
  {
    title: '课程章节',
    dataIndex: 'chapters',
    key: 'chapters',
    render: chapters => { 
      if (chapters.length<1) {
        return;
      }
      // let temp = chapters[0].name;
      return (
        <Select
          // defaultValue={temp}
          style={{ width: 120 }}
          // onChange={handleChange}
        >
          {/* {chapters.map(function (item) { 
            return <Option value={item.id}>{item.testName}</Option>
          }
          )} */}
        </Select>
      )
    }
  },
  { title: '课程介绍', dataIndex: 'introduce', key: 'introduce' }
];
const newData = [
  {
    key: 1,
    name: 'John Brown',
    chapters: 32,
    introduce: 'New York No. 1 Lake Park',
  },
  {
    key: 2,
    name: 'John Brown',
    chapters: 32,
    introduce: 'New York No. 1 Lake Park',
  },
  {
    key: 3,
    name: 'John Brown',
    chapters: 32,
    introduce: 'New York No. 1 Lake Park'
  },
];
export default class MyCourseTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLeaf: [],
      chapterId:null
    };
  }
  componentDidMount() {
    let that = this;
    net.get("courses/and/chapters", {}, function (ob) {
      console.log(ob.data.object);
      that.setState({
        allLeaf: ob.data.object
      });
    });
  }

  expandedRowRender = () => {
    const columns = [
      { title: "试题题目", dataIndex: "testName", key: "testName" },
      {
        title: "操作",
        key: "action",
        render: () => (
          <span>预览</span>
        )
      }
    ];
    const testData = [
      {
        key: 1,
        testName:"这是第一个题",
      }
    ];
    return <Table columns={columns} dataSource={testData} pagination={false} />;
  };
  render() {
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
          columns={newColumns}
          style={{ width: "98.5%", margin: "0 auto", margin: "10px"}}
          expandedRowRender={this.expandedRowRender}
          dataSource={this.state.allLeaf}
          pagination={{ pageSize: 12, position: "right" }}
        />
        {/* <Button style={{ backgroundColor: "#ECECEC" }}>删除</Button> */}
      </div>
    );
  }
}
