import React from "react";
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import toggleAction from "../../redux/actions/sider";
import "./Header.css";
const { Header } = Layout;
class MyHeader extends React.Component {
  constructor(props) {
    super();
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
