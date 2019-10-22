import React from "react";
import "./CoursesList.css";
import { Button } from "antd";
export default class CoursesList extends React.Component {
  render() {
    return (
      <div className="courseBox">
        <div className="pageHeader">
            <h1 className="header_left">课程管理</h1>
            < div className = "header_right" >
               <a href="#" target="blank" className="headerBtn">创建课程</a>
            </div>
        </div>
        <ul className="nav">
            <li className="navTitle">
                <a href="../list/CoursesList.js">课程管理</a>
            </li>
        </ul>
        <div className="btnGroup">
          <a href="">普通课程</a>
          <a href="">班级课程</a>
          <a href="">会员课程</a>
        </div>
      </div>
    );
  }
}
