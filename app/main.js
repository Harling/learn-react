import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    Harling is <b>{true ? 'currently' : 'not'}</b> logged in.
    <hr />
    Liufei is <b>{false ? 'currently' : 'not'}</b> logged in.
  </div>,
  document.getElementById('root')
);
