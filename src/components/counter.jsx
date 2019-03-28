import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  renderTags() {
    const { tags } = this.state;
    if (tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { count, tags } = this.state;

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
        {tags.length >= 0 && <p>There are {tags.length} tags.</p>}
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
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
