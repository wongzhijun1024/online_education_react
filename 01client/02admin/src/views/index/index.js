import React from "react";
import { Redirect } from "react-router-dom";
export default class Index extends React.Component {
  render() {
    return localStorage.getItem("user") === null ? (
      <Redirect to="/login" />
    ) : (
<<<<<<< HEAD
      <Redirect to="/home/courses/list" />
=======
      <Redirect to="/home/test" />
>>>>>>> edabba0f8db77d985638fcc9ac9285832a6bdbb8
    );
  }
}
