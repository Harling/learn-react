import React from 'react';
import ReactDOM from 'react-dom';

/*
1. generic name
2. more case
*/

class CommentA extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-data">
          {props.data}
        </div>
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    const props = this.props;
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
}

class UserInfo extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
}

class CommentB extends React.Component {
  render () {
    const props = this.props;
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-data">
          {props.data}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <CommentA
    author={{name: "Harling", avatarUrl: "http://localhost/avatarUrl/harling/" }}
    data="Comment-data"
    text="Comment-text"
  />
  <CommentB
    author={{name: "Harling", avatarUrl: "http://localhost/avatarUrl/harling/" }}
    data="Comment-data"
    text="Comment-text"
  />
  </div>,
  document.getElementById('root')
);
