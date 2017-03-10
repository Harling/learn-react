import React from 'react';
import ReactDOM from 'react-dom';
/*
React elements are immutable.
create a new element.
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
    document.getElementById('root') // 兄弟节点会被覆盖, 所以节此点下总是只有本次render结果.g
  );
}

setInterval(tick, 1000);
