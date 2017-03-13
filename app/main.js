import React from 'react';
import ReactDOM from 'react-dom';


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <div>
		<Greeting isLoggedIn={false} />
		<hr />
		<Greeting isLoggedIn={true} />
  </div>,
  document.getElementById('root')
);
