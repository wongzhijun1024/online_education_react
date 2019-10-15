import React from "react";
import "./User.css";
import { Button } from "antd";
export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      inputPasswd: ""
    };
  }

  render() {
    return (
      <div className="userView">
        <h1>用户管理页面</h1>

        <Button>按钮</Button>
      </div>
    );
  }
}
