import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world!</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

ReactDOM.render(
  element, // React element
  document.getElementById('root') // DOM node
);
