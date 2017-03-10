import React from 'react';
import ReactDOM from 'react-dom';
/*
React DOM compares the element and its children to the previous one,
and only applies the DOM updates necessary to bring the DOM to the desired state.
比较&&更新必要的部分
*/

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
