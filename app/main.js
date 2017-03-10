import React from 'react';
import ReactDOM from 'react-dom';
/*
Babel compiles JSX down to React.createElement() calls.
*/

/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
*/

const element = React.createElement(
  'h1', // tag name
  {},   // 属性
  'Hello, world!' //children
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
