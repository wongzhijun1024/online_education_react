import React from "react";
import ReactDOM from "react-dom";
import "./Add.css";
import net from "../../../utils/net";
import StringUtil from "../../../utils/StringUtil";
import { Form, Select, Input, Button, Radio, Cascader, message } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { TextArea } = Input;

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}
class ExaminationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chapterId: -1,
      courses: []
    };
  }

  componentDidMount = e => {
    let that = this;
    net.post("courses/and/chapters", {}, function(ob) {
      let courses = StringUtil.CascaderData(ob.object);
      console.log(courses);
      that.setState({
        courses: courses
      });
    });
  };
  handleSubmit = e => {
    console.log(e);
  };
  upload = e => {
    let form = this.refs.form;
    console.log(form.props.children);
    return;
    //获得题干
    let title = this.refs.title.state.value;
    //获得选项A
    let textA = this.refs.textA.state.value;
    console.log(textA);
    //获得选项B
    let textB = this.refs.textB.state.value;
    //获得选项C
    let textC = this.refs.textC.state.value;
    //获得选项D
    let textD = this.refs.textD.state.value;
    //获得文件的数据
    let fileList = this.state.fileList;
    //章节id
    let chapterId = 2;
    // 答案
    let answer = "textA";
    // 章节顺序
    let order = 0;
    net.uploadFile(
      "question/add",
      {
        title: title,
        textA: textA,
        textB: textB,
        textC: textC,
        textD: textD,
        answer: answer,
        chapterId: chapterId,
        files: fileList,
        order: order
      },
      function(ob) {
        console.log(ob);
      }
    );
  };
  beforeUpload = file => {
    console.log(file);
    //获得文件的数据
    let fileList = this.state.fileList;
    //添加文件
    fileList.push(file);
    //覆盖数据
    this.setState({
      fileList: fileList
    });
  };
  handleSelectChange = value => {
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "本课程" ? "其他课程" : "本课程"}!`
    });
  };
  toQuery() {
    this.props.history.push(`/home/examination/query`);
  }

  onCascaderChange(value) {
    if (value.length <= 1) {
      message.error("请选择章节！");
    }
    this.setState({
      chapterId: value[1]
    });
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
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} ref="form">
            <Form.Item label="从属">
              <Cascader
                options={this.state.courses}
                expandTrigger="hover"
                displayRender={displayRender}
                onChange={this.onCascaderChange.bind(this)}
                style={{ width: "200px" }}
                placeholder="请选择课程"
              />
            </Form.Item>

            <Form.Item label="题干" ref="title">
              {getFieldDecorator("stem", {
                rules: [{ required: true }]
              })(<TextArea rows={4} />)}
            </Form.Item>

            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="bankSelectcontent"
            >
              <Form.Item label="选项A" ref="textA">
                {getFieldDecorator("selectA", {
                  rules: [{ required: true }]
                })(<TextArea rows={4} />)}
              </Form.Item>
              <div className="readySelect">
                <Radio value={11}>正确答案</Radio>
              </div>
              <Form.Item label="选项B" ref="textB">
                {getFieldDecorator("selectB", {
                  rules: [{ required: true }]
                })(<TextArea rows={4} />)}
              </Form.Item>
              <div className="readySelect">
                <Radio value={22}>正确答案</Radio>
              </div>
              <Form.Item label="选项C" ref="textC">
                {getFieldDecorator("selectC", {
                  rules: [{ required: true }]
                })(<TextArea rows={4} />)}
              </Form.Item>
              <div className="readySelect">
                <Radio value={33}>正确答案</Radio>
              </div>
              <Form.Item label="选项D" ref="textD">
                {getFieldDecorator("selectD", {
                  rules: [{ required: true }]
                })(<TextArea rows={4} />)}
              </Form.Item>
              <div className="readySelect">
                <Radio value={44}>正确答案</Radio>
              </div>
            </Radio.Group>
          </Form>
        </div>

        <div className="bank2-buttom">
          <Button
            type="primary"
            style={{ background: "#43BB60" }}
            onClick={this.toQuery.bind(this)}
          >
            保存并继续添加
          </Button>
          <Button
            type="primary"
            style={{ background: "#43BB60" }}
            className="Bank2ButtonCenter"
            // onClick={this.toQuery.bind(this)}
            onClick={this.upload}
          >
            保存
          </Button>
          <Button
            type="link"
            onClick={this.toQuery.bind(this)}
            style={{ color: "black" }}
          >
            返回
          </Button>
        </div>
      </div>
    );
  }
}
export default Form.create()(ExaminationAdd);
