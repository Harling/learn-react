import React from 'react';
import ReactDOM from 'react-dom';

/* Functional */
function WelcomeF(props) {
  return <h1>Hello, {props.name}</h1>;
}

/* Class */
class WelcomeC extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <div>
    <WelcomeF name="Functional Component" />
    <WelcomeC name="Class Component" />
  </div>,
  document.getElementById('root')
);
