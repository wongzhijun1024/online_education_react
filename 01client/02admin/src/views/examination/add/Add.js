import React from "react";
import ReactDOM from "react-dom";
import "./Add.css";
import net from "../../../utils/net";
import StringUtil from "../../../utils/StringUtil";
import { Form, Select, Input, Button, Radio, Cascader, message } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const { TextArea } = Input;

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}
class ExaminationAdd extends React.Component {
  constructor(props) {
    super(props);
    // this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.state = {
      data: [],
      chapterId: -1,
      courses: [],
      answer: "0",
      deep: "a"
    };
  }

  componentDidMount = e => {
    let that = this;
    net.post("courses/and/chapters", {}, function (ob) {
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
  // upload = e => {
  //   let form = this.refs.form;
  //   console.log(form.props.children);
  //   let that = this;
  //   //获得题干
  //   let title = this.refs.title.state.value;

  // };
  upload = e => {
    let form = this.refs.form;
    console.log(form.props.children);
    //获得题干
    // console.log(title);
    let title = this.refs.title.state.value;
    console.log(title);
    //获得选项A
    let textA = this.refs.textA.state.value;
    //获得选项B
    let textB = this.refs.textB.state.value;
    //获得选项C
    let textC = this.refs.textC.state.value;
    //获得选项D
    let textD = this.refs.textD.state.value;
    //获得答案
    // let answer = this.refs.answer.state.value;
    // console.log(answer);y
    //章节id
    let chapterId = this.state.chapterId;

    net.uploadFile(
      "question/add",
      {
        title: title,
        textA: textA,
        textB: textB,
        textC: textC,
        textD: textD,
        // answer: answer,
        chapterId: chapterId
      },
      function (ob) {
        console.log(ob);
        if (ob.code === -1) {
          alert("保存失败");
        } else {
          alert("保存成功");
        }

      }
    );
  };

  handleSelectChange = value => {
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "本课程" ? "其他课程" : "本课程"}!`
    });
  };
  toQuery() {
    this.props.history.push(`/home/examination/query`);
  }
  getValue = (event) => {
    //获取单选框选中的值
    console.log(event.target.value);
    this.setState({
      answer: event.target.value,
      deep: event.target.value
    })
  }

  // getValue1 = (event) => {
  //   //获取单选框选中的值
  //   console.log(event.target.value);
  //   this.setState({
  //     deep: event.target.value
  //   })
  // }

  onCascaderChange(value) {
    if (value.length <= 1) {
      message.error("请选择章节！");
    }
    this.setState({
      chapterId: value[1]
    });
  }
  // handleTextareaChange(e) {
  //   console.log(e);
  //   this.setState({
  //     textareaValue: e.target.value
  //   })

  // }
  render() {
    // const { getFieldDecorator } = this.props.form;
    // const { textareaValue } = this.state;

    return (
      <div className="coursesBankBox-2">
        <div className="banktitle-2">题库添加</div>
        <div className="bankheader">
          <p>试题添加 / 添加题目 / 单选框</p>
        </div>

        <div className="bank-content">
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} ref="form" >
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
            <Form.Item label="难度">
              <Radio.Group>
                <Radio value="a" onChange={(e) => this.getValue(e)}>简单</Radio>
                <Radio value="b" onChange={(e) => this.getValue(e)}>一般</Radio>
                <Radio value="c" onChange={(e) => this.getValue(e)}>困难</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="题干">

              <Input ref="title" placeholder="" />

            </Form.Item>

            <Radio.Group
              name="radiogroup"
              defaultValue={1}
              className="bankSelectcontent"
            >
              <Form.Item label="选项A" >

                <Input ref="textA" placeholder="" />

              </Form.Item>
              <div className="readySelect">
                <Radio value="0" onChange={(e) => this.getValue(e)}>正确答案</Radio>
              </div>
              <Form.Item label="选项B" >
                <Input ref="textB" placeholder="" />
              </Form.Item>
              <div className="readySelect">
                <Radio value="1" onChange={(e) => this.getValue(e)}>正确答案</Radio>
              </div>
              <Form.Item label="选项C" >
                <Input ref="textC" placeholder="" />
              </Form.Item>
              <div className="readySelect">
                <Radio value="2" onChange={(e) => this.getValue(e)}>正确答案</Radio>
              </div>
              <Form.Item label="选项D" >
                <Input ref="textD" placeholder="" />
              </Form.Item>
              <div className="readySelect">
                <Radio value="3" onChange={(e) => this.getValue(e)}>正确答案</Radio>
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
