import React, { Component } from "react";
import MyTable from "./mytable";

class BaseApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <MyTable />
        <MyTable />
        <MyTable />
      </div>
    );
  }
}

export default BaseApp;
