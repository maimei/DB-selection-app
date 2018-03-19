import React, { Component } from 'react';
import logo from './aiven-logo.png';
import './App.css';
import RegionSelection from './RegionSelection';
import ProviderSelection from './ProviderSelection';
import DistanceSelection from './DistanceSelection';
import CloudTable from './CloudTable';

const apiAddress = 'https://api.aiven.io/v1beta/clouds'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
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
      this.getAllGeoRegions();
      this.convertAPIData();
      console.log(typeof this.state.apiData)
    })
  }

  //Get all geo regions from currently available clouds
  getAllGeoRegions() {
    var geoRegions = [];
    for (var i = 0; i < 70; i++) {
      var geoRegion = this.state.apiData.clouds[i].geo_region;
      if(!geoRegions.includes(geoRegion)) {
        geoRegions.push(geoRegion)
      }
    }
    this.setState( {
      regions: geoRegions
    })
  }

  //shows all available clouds based on the parameter selection of user
  convertAPIData() {
    var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0}
    var result = Object.keys(obj).map(function(key) {
      return [Number(key), obj[key]];
    });
    console.log(obj);
    console.log(result);
    console.log(result.length)
  }

  render() {
    if(!this.state.apiData) return <p>Loading...</p> 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Cloud-selection" className="body">
          <h2>Choose Your Cloud Service</h2>
          <p>{this.state.apiData.clouds[0].cloud_description}</p>
          <div className="sub">
            <RegionSelection regions={this.state.regions}/>
          </div>
          <div className="sub">
            <ProviderSelection/>
          </div>
          <div className="sub">
            <DistanceSelection/>
          </div>
        </div>
        <div className="Available-clouds" className="body">
          <CloudTable data={this.state.apiData}/>
        </div>
      </div>
    );
  }
}