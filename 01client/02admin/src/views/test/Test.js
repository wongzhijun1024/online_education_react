import React from "react";
import { Upload, Input, Icon, Button, Row, Col } from "antd";
import net from "../../utils/net";
export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }

  upload = e => {
    net.post(
      "insert/exam/chapter",
      { chapterId: 2, questionIds: [1, 2, 3, 4] },
      function(ob) {
        console.log(ob);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>测试</h1>

        <Button type="primary" onClick={this.upload} style={{ marginTop: 16 }}>
          上传文件
        </Button>
      </div>
    );
  }
}
