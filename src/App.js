import React, { Component } from 'react';
import logo from './aiven-logo.png';
import './App.css';
import RegionSelection from './RegionSelection';
import ProviderSelection from './ProviderSelection';
import DistanceSelection from './DistanceSelection';
import CloudTable from './CloudTable';

const apiAddress = 'https://api.aiven.io/v1beta/clouds'

//have to be identified manually
const validProviders = ['Azure', 'Amazon Web Services', 'DigitalOcean',
  'Google Cloud', 'UpCloud']

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: '',
      provider: ''
    };
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleProviderChange = this.handleProviderChange.bind(this);
  }

  //Fetch API data 
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

  //Updates the region state
  handleRegionChange(reg) {
    this.setState({region: reg});
  }

  //Updates the provider state
  handleProviderChange(prov) {
    this.setState({provider: prov});
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
          <div className="sub">
            <RegionSelection 
              regions={this.state.regions}
              onRegionChange={this.handleRegionChange}
            />
          </div>
          <div className="sub">
            <ProviderSelection
              providers={validProviders}
              onProviderChange={this.handleProviderChange}
            />
          </div>
          <div className="sub">
            <DistanceSelection/>
          </div>
        </div>
        <div className="Available-clouds" className="body">
          <CloudTable 
            data={this.state.apiData}
            region={this.state.region}
            provider={this.state.provider}
            providers={validProviders}
          />
        </div>
      </div>
    );
  }
}