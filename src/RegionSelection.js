import React, { Component } from 'react';

export default class RegionSelection extends Component {

  constructor(props) {
    super(props) 
  }

  // showRegions() {
  //   const regions = this.props.regions.map((r) => <option>r</option>);
  //   return regions;
  // }

  render() {
    if(!this.props.regions) return <p>Loading...</p> 
    console.log(this.props.regions)
    return (
      <div>
          <p>1. Step: Choose Your Region</p>
          <select>{this.props.regions.map(r => <option value={r}>{r}</option>)}</select>
      </div>
    );
  }
}