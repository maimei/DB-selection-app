import React, { Component } from 'react';

export default class ProviderSelection extends Component {

  constructor(props) {
    super(props) 
    this.handleChange = this.handleChange.bind(this);
  }

  //handle provider selection
  handleChange(event) {
    this.props.onProviderChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    console.log(this.props.providers)
    return (
      <div>
        <fieldset>
            <p>2. Step: Choose Your Provider</p>

            <select onChange={this.handleChange}>
              <option value="">Select</option>
              {this.props.providers.map(r => 
              <option value={r} key={r}>{r}</option>)}
            </select>
            
        </fieldset>
      </div>
    );
  }
}