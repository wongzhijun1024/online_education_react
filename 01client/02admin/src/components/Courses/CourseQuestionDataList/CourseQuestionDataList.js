import React from "react";
import "./CourseQuestionDataList.css";
import { Icon, Button, Input, Select } from "antd";
import net from "../../../utils/net";
import E from "wangeditor";
import { Link } from "react-router-dom";
export default class CourseQuestionDataList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  toCourseQuestionDataCreate() {
    this.props.history.push(`/home/courses/add/question/data/create`);
  }

  render() {
    return (
      <div className="courseTestBox">
        <Button
          onClick={this.toCourseQuestionDataCreate.bind(this)}
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
      </div>
    );
  }
}
