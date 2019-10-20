import React from "react";
import "./Add.css";
import { Upload, Input, Icon, Button } from "antd";
import net from "../../../utils/net";
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }

  render() {
    return <div className="addView">视频添加</div>;
  }
}
