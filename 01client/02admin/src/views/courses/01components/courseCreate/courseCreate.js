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
      value: undefined,
      fileList:[],
      columns: [
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
        }
      ],
      chapterId: 1,
      questionIds: []
    };
  };

  componentDidMount() {
    let that = this;
    net.post("courses/and/chapters", {}, function (ob) {
      let courseByChapters = StringUtil.CascaderData(ob.object);
      that.setState({
        courseByChapter: courseByChapters
        // courseByChapter:ob.object
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
              // onChange={this.handleChange}
              // key={item1.id}
              >
                {item1.questions.map(function (item2) {
                  return (
                    <TreeNode
                      value={item2.id}
                      title={item2.title}
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
  handleChange = value => {
    let that = this;
    net.get("question/and/chapterid", {
      id: value,
    },
      function (ob) {
        that.setState({
          questionData: ob.data.object,
          chapterId: value
        })
        console.log(ob.data.object);
      }
    )
  };
  upload =e=> {
    let chapterId = this.state.chapterId;
    console.log(chapterId);
    let questionData = this.state.questionData;
    let questionIds=[];
    questionData.map(function (item) {
      questionIds.push(item.id);
      console.log(questionIds);
      return questionIds;
    });
   
    net.post(
      "insert/exam/chapter",
      {
        chapterId: chapterId, questionIds: questionIds
      },
      function (ob) {
        console.log(ob);
      }
    )
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
          <h1 className="testTitle">创建试卷</h1>
        </div>
        <div className="createBox">
          <div className="createHeader">
            <div className="createHeaderLeft">
              <span className="leftVideo">课程章节</span>
              <TreeSelect
                style={{ width: 300 }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={this.state.courseByChapter}
                placeholder="请选择相应章节"
                treeDefaultExpandAll
                onChange={this.handleChange}
                key="chapter"
              >
              </TreeSelect>
            </div>
            {/* <div className="createHeaderRight">
              <span className="rightTest">课程章节试题</span>
              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value2}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                // treeData={this.state.allQuestions}
                placeholder="请选择相应试题"
                treeDefaultExpandAll
                // onChange={this.testOnChange}
                key="test"
              >
                {this.showTreeList()}
              </TreeSelect>
            </div> */}
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.questionData}
            style={{ width: "100%", margin: "0 auto" }}
            pagination={{ pageSize: 12, position: "right" }}
          />
          <div className="keepBtn">
            <Button
              style={{ backgroundColor: "#43BC60", width: "120px", textAlign: "center", color: "white" }}
              onClick={this.upload}
            >保存</Button>
            <Link to={"/home/courses/add"}>
              <Button className="backToCreate">返回</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
