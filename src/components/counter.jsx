import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  handleIncrement() {
    console.log("Increment clicked");
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const { count, tags } = this.state;
    console.log(this.props.value);

    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
