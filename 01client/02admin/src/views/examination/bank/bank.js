import React from "react";
import ReactDOM from "react-dom";
import "./bank.css";
import net from "../../../utils/net";
import { Form, Select, Input, Button, Radio,Cascader } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;
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

function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}
class ExaminationBank extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      data: []
    };
    console.log(props);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "本课程" ? "其他课程" : "本课程"}!`
    });
  };
  toAdd() {
    this.props.history.push(`/home/examination/add`);
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="coursesBankBox-2">
        <div className="banktitle-2">题库添加</div>
        <div className="bankheader">
          <p>试题添加 / 添加题目 / 单选框</p>
        </div>

        <div className="bank-content">
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label="从属">
              {/* <Select
                style={{ width: "200px" }}
                placeholder="请选择课程"
                onChange={this.handleSelectChange}
              >
                <Option value="male">本课程</Option>
                <Option value="female">其他课程</Option>
              </Select> */}
              <Cascader
              options={options}
              expandTrigger="hover"
              displayRender={displayRender}
              onChange={onChange}
              style={{ width: "200px" }}
              placeholder="请选择课程"
            />
            </Form.Item>

            <Form.Item label="难度">
              <Radio.Group>
                <Radio value="a">简单</Radio>
                <Radio value="b">一般</Radio>
                <Radio value="c">困难</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="题干" >
              {getFieldDecorator("stem", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>

            <Form.Item label="选项A">
              {getFieldDecorator("selectA", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>
            <div className="readySelect">
            <Radio >正确答案</Radio>
            </div>
            
            <Form.Item label="选项B">
              {getFieldDecorator("selectB", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>
            <div className="readySelect">
            <Radio >正确答案</Radio>
            </div>
            <Form.Item label="选项C">
              {getFieldDecorator("selectC", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>
            <div className="readySelect">
            <Radio >正确答案</Radio>
            </div>
            <Form.Item label="选项D">
              {getFieldDecorator("selectD", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>
            <div className="readySelect">
            <Radio >正确答案</Radio>
            </div>
          </Form>
        </div>

        <div className="bank2-buttom">
          <Button type="primary" style={{ background: "#43BB60" }} onClick={this.toAdd.bind(this)}>
            保存并继续添加
          </Button>
          <Button
            type="primary"
            style={{ background: "#43BB60" }}
            className="Bank2ButtonCenter"
            onClick={this.toAdd.bind(this)}
          >
            保存
          </Button>
          <Button
            type="link"
            onClick={this.toAdd.bind(this)}
            style={{ color: "black" }}
          >
            返回
          </Button>
        </div>
      </div>
    );
  }
}
export default Form.create()(ExaminationBank);
