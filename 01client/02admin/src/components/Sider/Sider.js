import React from "react";
import { Menu, Icon, Layout } from "antd";
import "./Sider.css";
import { Link } from "react-router-dom";
import toggleAction from "../../redux/actions/sider";
import { connect } from "react-redux";
const { SubMenu } = Menu;
const { Sider } = Layout;
class MySider extends React.Component {
  onCollapse() {}
  render() {
    return (
      <div className="siderBox">
        <div className="headView">NOI后台管理</div>
        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  老师管理
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to={"/home/teacher/add"}>
                  <Icon type="pie-chart" />
                  <span> 老师添加 </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to={"/home/teacher/query"}>
                  <Icon type="pie-chart" />
                  <span> 老师查询 </span>
                </Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="3">
              <Link to={"/home/product"}>
                <Icon type="desktop" />
                <span> 产品管理页面 </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    collapsed: state.sider.collapsed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCollapsed: () => {
      dispatch(toggleAction);
    }
  };
};
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MySider);

export default App;
