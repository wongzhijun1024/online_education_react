import React from "react";
import "./courseCreate.css";
import { Button, Input, Table, TreeSelect } from "antd";
import net from "../../../../utils/net";
import {
  Link
} from 'react-router-dom';
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
    key: 'C++',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
    ],
  },
  {
    title: '数据结构',
    value: '数据结构',
    key: '数据结构',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
    ],
  },
  {
    title: 'Java',
    value: 'Java',
    key: 'Java',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
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
    key: 'C++',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '第一题',
            value: '第一题',
            key: '第一题'
          },
          {
            title: '第二题',
            value: '第二题',
            key: '第二题'
          },
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '第一题',
            value: '第一题',
            key: '第一题'
          },
          {
            title: '第二题',
            value: '第二题',
            key: '第二题'
          }
        ]
      },
    ],
  },
  {
    title: '数据结构',
    value: '数据结构',
    key: '数据结构',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '第一题',
            value: '第一题',
            key: '第一题'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '第一题',
            value: '第一题',
            key: '第一题'
          },
          {
            title: '第二题',
            value: '第二题',
            key: '第二题'
          }
        ]
      },
    ],
  },
  {
    title: 'Java',
    value: 'Java',
    key: 'Java',
    children: [
      {
        title: '第一章',
        value: '第一章',
        key: '第一章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
          }
        ]
      },
      {
        title: '第二章',
        value: '第二章',
        key: '第二章',
        children: [
          {
            title: '视频1',
            value: '视频2',
            key: '视频3'
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
      value1: undefined,
      value2: undefined,
    };
  };

  videoOnChange = value1 => {
    console.log(value1);
    this.setState({ value1 });
  };
  testOnChange = value2 => {
    console.log(value2);
    this.setState({ value2 });
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
              <span className="leftVideo">课程章节视频</span>
              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value1}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={VideoTreeData}
                placeholder="请选择相应视频"
                // treeDefaultExpandAll
                onChange={this.videoOnChange}
              />
            </div>
            <div className="createHeaderRight">
              <span className="rightTest">课程章节试题</span>
              <TreeSelect
                style={{ width: 300 }}
                value={this.state.value2}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={TestTreeData}
                placeholder="请选择相应试题"
                // treeDefaultExpandAll
                onChange={this.testOnChange}
              />
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
            <Button style={{ backgroundColor: "#43BC60", width: "120px", textAlign: "center", color: "white" }}>保存，下一步</Button>
            <Link to={"/home/courses/add/list"}>
              <Button>返回</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
