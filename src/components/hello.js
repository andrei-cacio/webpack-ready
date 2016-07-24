import React, { Component } from 'react';

const style = { color: 'blue' };

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={style}>Hello, {this.props.who} !</div>);
  }
}
