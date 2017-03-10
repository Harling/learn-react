import React from 'react';
import ReactDOM from 'react-dom';

/*
Components can refer to other components in their output.  
*/
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class WelcomBoard extends React.Component {
  render() {
    return (
        <div>
          <Welcome name="Harling" />
          <Welcome name="Liufei" />
        </div>
    )
  }
}

ReactDOM.render(
  <WelcomBoard />,
  document.getElementById('root')
);
