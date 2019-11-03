import React from "react";
import "./courseCreate.css";
import { Button, Input, Table, TreeSelect } from "antd";
import net from "../../../../utils/net";
import StringUtil from "../../../../utils/StringUtil";
import {
  Link
} from 'react-router-dom';
const { TreeNode } = TreeSelect;
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
const VideoTreeData = [
  {
    title: 'C++',
    value: 'C++',
    key: '视频/C++',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '视频/C++/第一章',
        children: [
          {
            title: '视频1',
            value: '视频1',
            key: '视频/C++/第一章/视频1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '视频/C++/第二章',
        children: [
          {
            title: '视频2',
            value: '视频2',
            key: '视频/C++/第二章/视频2'
          }
        ]
      },
    ],
  },
  {
    title: '数据结构',
    value: '数据结构',
    key: '视频/数据结构',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '视频/数据结构/第一章',
        children: [
          {
            title: '视频1',
            value: '视频1',
            key: '视频/数据结构/第一章/视频1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '视频/数据结构/第二章',
        children: [
          {
            title: '视频1',
            value: '视频1',
            key: '视频/数据结构/第二章/视频1'
          }
        ]
      },
    ],
  },
  {
    title: 'Java',
    value: 'Java',
    key: '视频/Java',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '视频/Java/第一章',
        children: [
          {
            title: '视频1',
            value: '视频1',
            key: '视频/Java/第一章/视频1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '视频/Java/第二章',
        children: [
          {
            title: '视频1',
            value: '视频1',
            key: '视频/Java/第二章/视频1'
          }
        ]
      },
    ],
  }
];
const TestTreeData = [
  {
    title: 'C++',
    value: 'C++',
    key: '试题/C++',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '试题/C++/第一章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/C++/第一章/试题1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '试题/C++/第二章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/C++/第二章/试题1'
          }
        ]
      },
    ],
  },
  {
    title: '数据结构',
    value: '数据结构',
    key: '试题/数据结构',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '试题/数据结构/第一章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/数据结构/第一章/试题1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '试题/数据结构/第二章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/数据结构/第二章/试题1'
          }
        ]
      },
    ],
  },
  {
    title: 'Java',
    value: 'Java',
    key: '试题/Java',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '试题/Java/第一章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/Java/第一章/试题1'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '试题/Java/第二章',
        children: [
          {
            title: '试题1',
            value: '试题1',
            key: '试题/Java/第二章/试题1'
          }
        ]
      },
    ],
  }
];
const data = [];
export default class MyCourseCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      courseByChapter: [],
      allQuestions: [],
      value1: null,
      value2: null
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
        allQuestions:ob.object
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
          title={item.name} key={item.id}>
          {item.chapters.map(function (item1) {
            return (
              <TreeNode
                value={item1.id}
                title={item1.name}
                key={item1.id}
              >
                {item1.questions.map(function (item2) {
                  return (
                    <TreeNode
                      value={item2.id}
                      title={item2.title}
                      key={item2.id}
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
            columns={columns}
            dataSource={data}
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
