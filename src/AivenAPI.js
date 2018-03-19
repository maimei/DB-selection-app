import React, { Component } from 'react';

const apiAddress = 'https://api.aiven.io/v1beta/clouds'

export default class AivenAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  //immediately called after component is placed into dom
  //make network request
  componentDidMount() {
    fetch(apiAddress)
    .then(clouds => clouds.json())
    .then(clouds => {
      this.setState({
        apiData: clouds
      })
    })
  }

  //Get all geo regions from currently available clouds
  getAllGeoRegions = () => {
    var geoRegions = [];
    for (var i = 0; i < 70; i++) {
      var geoRegion = this.state.apiData.clouds[i].geo_region;
      if(!geoRegions.includes(geoRegion)) {
        geoRegions.push(geoRegion)
      }
    }
    this.props.setGeoRegions(geoRegions);
    //return geoRegions
  }

  render() {
    if(!this.state.apiData) return <p>Loading...</p> 
    return (
      <div>
          Loading ...
          {console.log(this.state.apiData)}
          <p>{this.state.apiData.clouds[0].cloud_description}</p>
          <p>{this.state.apiData.clouds[0].geo_region}</p>
          <button onClick={this.getAllGeoRegions}>Load API data</button>
      </div>
    );
  }
}