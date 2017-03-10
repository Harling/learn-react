import React from 'react';
import ReactDOM from 'react-dom';

/* 
After compilation, JSX expressions become regular JavaScript objects.
This means that you can use JSX inside of if statements and for loops, 
assign it to variables, accept it as arguments, and return it from functions:
*/

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);
