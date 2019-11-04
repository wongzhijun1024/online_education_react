import React from "react";
import "./Query.css";
import { List, Avatar} from "antd";
import net from "../../../utils/net";
export default class Query extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      data:[],
    };
  };
  componentDidMount() {
    let that = this;
    net.get("teachers", {}, function(ob) {
      that.setState({
        data: ob.data.object
      });
    });
  }
  render() {
    return (
      <div className="box">
        <div className="title1">师资列表</div>
        <div className="list">
        <List
    itemLayout="horizontal"
    dataSource={this.state.data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.tkey} />}
          
        />
        <List.Item.Meta
          
          title={<a href="https://ant.design">{item.name}</a>}
          
        />
        <List.Item.Meta
          
          description={item.introduce}
        />
      </List.Item>
    )}
  />
</div>
</div>
    );
  }
}
