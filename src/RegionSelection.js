import React, { Component } from 'react';

export default class RegionSelection extends Component {

  constructor(props) {
    super(props) 
    this.handleChange = this.handleChange.bind(this);
  }

  // showRegions() {
  //   const regions = this.props.regions.map((r) => <option>r</option>);
  //   return regions;
  // }

  //handle region selection
  handleChange(event) {
    this.props.onRegionChange(event.target.value);
  }

  prettyPrint(region) {
    //capitalize region name
    region = region.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() 
      + txt.substr(1).toLowerCase();
    });
    return region;
  }

  render() {
    if(!this.props.regions) return <p>Loading...</p> 
    return (
      <div>
        <fieldset>
          <p>1. Step: Choose Your Region</p>
          <select onChange={this.handleChange}>
            <option value="">Select</option>
            {this.props.regions.map(r => 
              <option value={r} key={r}>{this.prettyPrint(r)}
              </option>)}
          </select>
        </fieldset>
      </div>
    );
  }
}