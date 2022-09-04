import React, { Component } from "react";
import Button from "./Button";

class Dummy extends Component {
  state = { count: 0 };
  hello = () => {
    console.log("elloos");
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  bello() {
    console.log("belllo");
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button action={this.hello} name="hello" />
      </div>
    );
  }
}

export default Dummy;
