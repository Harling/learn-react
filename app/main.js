import React from 'react';
import ReactDOM from 'react-dom';

class ActionLink extends React.Component {
  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        Click me
      </a>
    );
  }
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
}


ReactDOM.render(
  <ActionLink />,
  document.getElementById('root')
);
