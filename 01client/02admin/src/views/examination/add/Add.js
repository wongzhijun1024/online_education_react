import React from "react";
import "./Add.css";
import net from "../../../utils/net";
import { Button, Cascader, Table,Radio } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const options = [
  {
    value: "C++",
    label: "C++",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "数据结构",
    label: "数据结构",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  },  
  {
    value: "Python",
    label: "Python",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  },
  {
    value: "Java",
    label: "Java",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];
const columns = [
  {
    title: '题干',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: 'age',
  },
  {
    title: '最后更新',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },

];
const data = [];
function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

// rowSelection object indicates the need for row selection
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

export default class ExaminationAdd extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      data: [],
    };

  }
  tobank(){
    this.props.history.push(`/home/examination/bank`);
  }

  render() {
    return (
      <div className="coursesBankBox">
        {/* 头部 */}
        <div className="coursesBankHead">
          <div className="coursesBankTitle">题库添加</div>
          {/* <Link
          to="/home/examination/bank"> */}
          <Button
            type="primary"
            style={{ background: "#278BF5" }}
            onClick={this.tobank.bind(this)}
          >
            +单选题
          </Button>
          {/* </Link> */}
         
        </div>
        {/* 选择器 */}
        <div className="BankSeletBox">
          <div className="left-Select">
            <Cascader
              options={options}
              expandTrigger="hover"
              displayRender={displayRender}
              onChange={onChange}
            />
          </div>
          <Button
            value="small"
            type="primary"
            style={{ background: "#43BB60", margin: "0px 8px 0px 0px" }}
          >
            搜索
          </Button>
        </div>
        {/* 题库表单 */}
        <div className="table-Bank">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
          {/* 删除按键 */}
          
          <div className="bank-button">
          <Radio className="bk-butten">全选</Radio>
          <Button type="primary" style={{ background: "#ECECEC",color:"black" }}>删除</Button>
          </div>
         
        </div>
      </div>
    );
  }
}
