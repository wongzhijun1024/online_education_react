import React from "react";
import "./Register.css";
import { Row, Col, Input, Icon, Tooltip, Button } from "antd";
export default class RegisterView extends React.Component {
  render() {
    return (
      <div className="view">
        <h1>注册页面</h1>
        <div className="loginVeiw">
          <div className="content">
            <Row className="row">
              <Col span={4}>用户名</Col>
              <Col span={20}>
                <Input
                  className="input"
                  placeholder="输入你的用户名e"
                  prefix={
                    <Icon type="reddit" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon
                        type="info-circle"
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={4}>密码</Col>
              <Col span={20}>
                <Input.Password
                  placeholder="input password"
                  className="input"
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={12} className="col">
                <Button type="primary">注册</Button>
              </Col>
              <Col span={12} className="col">
                <Button>登录页面</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
