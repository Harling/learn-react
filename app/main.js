import React from 'react';
import ReactDOM from 'react-dom';

class RtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value_textarea: 'Please write an essay about your favorite DOM element.',
      value_select: 'coconut'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) { //!! handling multiple input
		const target = event.target;
    console.log("target.type", target.type) // input textarea radio checkbox select-one select-multi ...
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
				{/* textarea */}
        <label>
          Name:
          <textarea name="value_textarea" value={this.state.value_textarea} onChange={this.handleChange} /> //!! name
        </label>
				{/* select */}
        <label>
          Pick your favorite La Croix flavor:
          <select name="value_select" value={this.state.value_select} onChange={this.handleChange}> //!! name
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <RtForm />,
  document.getElementById('root')
);
