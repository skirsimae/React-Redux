import React from "react";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
