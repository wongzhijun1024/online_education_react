import React from "react";
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import toggleAction from "../../redux/actions/sider";
import "./Header.css";
const { Header } = Layout;
class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  eixtLogin = ()=>{
    console.log(this);
  }
  render() {
    return (
      <Header className="headBox">
        <div className="titleBox">
          <Icon
            className="icon"
            onClick={this.props.toggleCollapsed}
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          />
        </div>
        <div className = "titleBoxRight">
          <Link to = "/login">
            <div className = "eixtLogin" onClick = {this.eixtLogin}>
            退出登录<Icon type="logout" />
          </div>
          </Link>
          <div className = "headImag">
            <img src = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2420043518,103827907&fm=26&gp=0.jpg" />
          </div>
        </div>
      </Header>
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
// Connect component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHeader);

export default App;
