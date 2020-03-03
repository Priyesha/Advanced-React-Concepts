import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Priyesha",
    };
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'Priyesha'
        })
    }, 2000);
  }

  render() {
    console.log("Parent component render");
    return (
      <div>
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
