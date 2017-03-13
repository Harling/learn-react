import React from 'react';
import ReactDOM from 'react-dom';

/* DomForm uncontroled Form*/
class DomForm extends React.Component {
  render() {
    return (
     <form>
       <label>
       Name:
       <input type="text" name="name" />
       </label>
       <input type="submit" value="Submit" />
     </form>
    )
  }
}

class RtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
		<DomForm />
		<RtForm />
  </div>,
  document.getElementById('root')
);
