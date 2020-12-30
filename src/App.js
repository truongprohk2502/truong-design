import React, { Component } from "react";
import Button from "./components/button";

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "10px 0 10px 0" }}>
          <Button title="My button" variant="danger" size="small" />
        </div>
        <div style={{ margin: "10px 0 10px 0" }}>
          <Button title="My button" variant="success" size="medium" />
        </div>
        <div style={{ margin: "10px 0 10px 0" }}>
          <Button title="My button" variant="warning" size="large" />
        </div>
      </div>
    );
  }
}
