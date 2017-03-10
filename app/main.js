import React from 'react';
import ReactDOM from 'react-dom';

/*
Previously, we only encountered React elements that represent DOM tags:
// const element = <div />;

However, elements can also represent user-defined components:
//const element = <Welcome name="Sara" />;
 */

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Harling" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
