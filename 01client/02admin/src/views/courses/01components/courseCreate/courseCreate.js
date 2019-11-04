import React from "react";
import "./courseCreate.css";
import { Button, Input, Table, TreeSelect } from "antd";
import net from "../../../../utils/net";
import StringUtil from "../../../../utils/StringUtil";
import {
  Link
} from 'react-router-dom';
const { TreeNode } = TreeSelect;
export default class MyCourseCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      courseByChapter: [],
      allQuestions: [],
      value1: null,
      value2: null,
      questionData: [],
      columns: [
        {
          title: "章节",
          dataIndex: "chapters",
          key: "chapters",
          // render: chapters => {
          //   let value1 = this.state.value1;
          //   let value2 = this.state.value2;
          //   if (chapters.length < 1) {
          //     return
          //   }
          //   if (value1 == value2 && value1 != null && value2 != null) {
          //     return (
          //       <span>
          //         {chapters.map(function (item) {
          //           if (item.id == value1 && item.id == value2) {
          //             console.log(item.name);
          //             return item.name
          //           }
          //         })}
          //       </span>
          //     )
          //   }
          // }
        },
        {
          title: "题目",
          dataIndex: "title",
          render: text => <a>{text}</a>
        },
        {
          title: '选项A',
          dataIndex: 'textA',
        },
        {
          title: '选项B',
          dataIndex: 'textB',
        },
        {
          title: '选项C',
          dataIndex: 'textC',
        },
        {
          title: '选项D',
          dataIndex: 'textD',
        },
        {
          title: '正确答案',
          dataIndex: 'answer',
        },
        {
          title: '操作',
          dataIndex: 'action',
        }
      ],
      chapterId:1
    };
  };

  componentDidMount() {
    let that = this;
    net.post("courses/and/chapters", {}, function (ob) {
      let courseByChapters = StringUtil.CascaderData(ob.object);
      that.setState({
        courseByChapter: courseByChapters
      });
    });
    net.post("questions/all", {}, function (ob) {
      // let allQuestions = StringUtil.CascaderData(ob.object);
      // console.log(allQuestions);
      that.setState({
        allQuestions: ob.object
        // allQuestions: allQuestions
      })
    })
  };
  showTreeList = () => {
    let allQuestions = this.state.allQuestions;
    let length = allQuestions.length;
    if (length < 1) {
      return;
    }
    let allQuestion = allQuestions.map(function (item) {
      return (
        <TreeNode
          value={item.name}
          title={item.name}
        // key={item.id}
        >
          {item.chapters.map(function (item1) {
            return (
              <TreeNode
                value={item1.id}
                title={item1.name}
              // key={item1.id}
              >
                {item1.questions.map(function (item2) {
                  return (
                    <TreeNode
                      value={item2.id}
                      title={item2.title}
                      onChange={this.handleChange}
                    // key={item2.id}
                    ></TreeNode>
                  );
                })}
              </TreeNode>
            );
          })}
        </TreeNode>
      )
    });
    return allQuestion;
  };
  videoOnChange = value1 => {
    this.setState({ value1 });
  };
  testOnChange = value2 => {
    this.setState({ value2 });
  };
  handleChange = value => { 
    let that = this;
    console.log(value);
    this.setState({
      chapterId: value
    });
    let chapterId = this.state.chapterId; 
    // net.get("")
  }
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
          <h1 className="testTitle">创建试卷</h1>
        </div>
        <div className="createBox">
          <div className="createHeader">
            <div className="createHeaderLeft">
              <span className="leftVideo">课程章节视频</span>
              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value1}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={this.state.courseByChapter}
                placeholder="请选择相应章节"
                treeDefaultExpandAll
                onChange={this.videoOnChange}
                key="chapter"
              >
              </TreeSelect>
            </div>
            <div className="createHeaderRight">
              <span className="rightTest">课程章节试题</span>
              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value2}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                // treeData={this.state.allQuestions}
                placeholder="请选择相应试题"
                treeDefaultExpandAll
                onChange={this.testOnChange}
                key="test"
              >
                {this.showTreeList()}
              </TreeSelect>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.questionData}
            style={{ width: "100%", margin: "0 auto" }}
            pagination={{ pageSize: 12, position: "right" }}
          />
          <div className="keepBtn">
            <Button style={{ backgroundColor: "#43BC60", width: "120px", textAlign: "center", color: "white" }}>保存</Button>
            <Link to={"/home/courses/add"}>
              <Button className="backToCreate">返回</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
