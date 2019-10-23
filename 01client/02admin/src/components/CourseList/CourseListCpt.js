import React from "react";
import { Table, Divider, Button,Select } from "antd";
import "./CourseListCpt.css";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class MyCourseList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dataSource :[
        {
          key: '1',
          courseId: '1',
          name: '课程发布指南',
          price: '0.00',
          plans: '1',
          label: '课程',
          student: '9',
          time: 'user6nc7lc(系统用户)',
          state: '已发布',
          operation:''
        },
        {
          key: '1',
          courseId: '1',
          name: '课程发布指南',
          price: '0.00',
          plans: '1',
          label: '课程',
          student: '9',
          time: 'user6nc7lc(系统用户)',
          state: '已发布',
          operation: '管理'
        },
        {
          key: '1',
          courseId: '1',
          name: '课程发布指南',
          price: '0.00',
          plans: '1',
          label: '课程',
          student: '9',
          time: 'user6nc7lc(系统用户)',
          state: '已发布',
          operation: ''
        }
      ],
      columns :[
        {
          title: '课程编号',
          dataIndex: 'courseId',
          key: 'courseId',
          render: text => <span>{text}</span>
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: '计划数',
          dataIndex: 'plans',
          key: 'plans',
        },
        {
          title: '标签',
          dataIndex: 'label',
          key: 'label',
        },
        {
          title: '学员数',
          dataIndex: 'student',
          key: 'student',
        },
        {
          title: '创建者/时间',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '课程状态',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          render: title =>
            <div>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange} value="管理">
                <Option value="jack">发布课程</Option>
                <Option value="lucy">删除课程</Option>
            </Select>
          </div>
        }
      ]
    }
  }
  render() {
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
        dataSource={this.state.dataSource}
        columns={this.state.columns}
        style={{ width: "100%", margin: "0 auto" }}
        pagination={{ pageSize: 12, position: "right" }} />
        </div>
    );
  }
}

