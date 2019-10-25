import React from "react";
import { Redirect } from "react-router-dom";
export default class Index extends React.Component {
  render() {
    return localStorage.getItem("user") === null ? (
      <Redirect to="/login" />
    ) : (
      // <Redirect to="/home/courses/list" />
      <Redirect to="/home/courses/add" />
    );
  }
}
