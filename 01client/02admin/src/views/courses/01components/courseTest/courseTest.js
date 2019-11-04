import React from "react";
import "./courseTest.css";
import { Icon, Button, Radio, Table, Upload, message, Select } from "antd";
import net from "../../../../utils/net";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Option } = Select;
// 课程信息测试数据
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
      chapterId:null,
      questionData:[],
      newColumns:[
        { title: '课程名称', dataIndex: 'name', key: 'name' },
        {
          title: '课程章节',
          dataIndex: 'chapters',
          key: 'chapters',
          //通过课程的ID获取对应的章节
          render: chapters => {
            if (chapters.length<1) {
                return;
              }
              //获取第一个章节为默认值
            let temp = chapters[0].name;
            // console.log(chapters[0].questions);
            return (
              <Select
                defaultValue={temp}
                style={{ width: 120 }}
                onChange={this.changeQuestionByChapter}
              >
                {chapters.map(function(item) { 
                  return <Option value={item.id}>{item.name}</Option>
                }
              )}
              </Select>
            )
          }
        },
        { title: '课程介绍', dataIndex: 'introduce', key: 'introduce' }
      ]
    };
   };

  changeQuestionByChapter=value=>{
    let that=this;
    this.setState({
      chapterId:value
    });
    let chapterId = this.state.chapterId;
  }
  componentDidMount() {
    let that = this;
    // net.get("questions/all", {}, function (ob) {
    //   that.setState({
    //     allLeaf: ob.data.object
    //   });
    // });
    net.get("courses/and/chapters", {}, function (ob) {
      that.setState({
        allLeaf: ob.data.object
      });
    });
  }

  expandedRowRender = record => {
    const columns = [
      { title: "试题题目", dataIndex: "name", key: "name" },
      { title: "A", dataIndex: "textA", key: "textA" },
      { title: "B", dataIndex: "textB", key: "textB" },
      { title: "C", dataIndex: "textC", key: "textC" },
      { title: "D", dataIndex: "textD", key: "textD" },
      { title: "正确答案", dataIndex: "answer", key: "answer" }
    ];
    let allLeaf=this.state.allLeaf;
    let dataBuffer=[];
    let buffer=this.state.questionData;
    for (let i = 0; i < allLeaf.length; i++) {
      if (record.id) {
        
      }
    }
    return <Table columns={columns}
      // dataSource={testData}
      pagination={false} />;
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
          columns={this.state.newColumns}
          style={{ width: "98.5%", margin: "0 auto", margin: "10px"}}
          //额外的展开行Function(record, index, indent, expanded):ReactNode
          expandedRowRender={this.expandedRowRender}
          dataSource={this.state.allLeaf}
          pagination={{ pageSize: 12, position: "right" }}
        />
        {/* <Button style={{ backgroundColor: "#ECECEC" }}>删除</Button> */}
      </div>
    );
  }
}
