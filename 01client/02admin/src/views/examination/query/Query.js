import React from "react";
import "./Query.css";
import { Player } from "video-react";
import { Button, Table, Tabs } from "antd";
export default class Query extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="teacherQueryView">
        <Player ref="player" videoId="video-1">
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
    );
  }
}
