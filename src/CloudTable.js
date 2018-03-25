import React, { Component } from 'react';

export default class CloudTable extends Component {

  //Create table entries for each cloud
  //TODO: update data based on chosen parameteres
  //use filter methods for different parameteres
  showData(data) {
    console.log(this.props.region)
    var clouds = [];
    for (var i = 0; i < data.length; i++) {
      //if no parameters are given, show all clouds
      if(!this.props.region && !this.props.provider) {
        clouds.push(data[i]);
        continue;
      } 
      //otherwise filter by parameter
      //var regionClouds = [];
      if (data[i].geo_region===this.props.region) { //if region is given
        if (data[i].cloud_description.includes(this.props.provider)){
          clouds.push(data[i]);
        }
      } 
      //var providerClouds = [];
      //if (data[i].cloud_description.includes(this.props.provider)) {
      //  providerClouds.push(data[i]);
      //}
      //else if (data[i].cloud_description.includes(this.props.provider)) {
      //  //if provider is given
      //  clouds.push(data[i]);
      //}
      //console.log(regionClouds);
      //console.log(providerClouds);
      //clouds = this.intersect(regionClouds, providerClouds)
    }
    return clouds.map( cloud =>  
        <tr key={cloud.cloud_name}>
          <td>{cloud.cloud_description}</td>
          <td>{cloud.cloud_name}</td>
          <td>{cloud.geo_region}</td>
        </tr>
      )
  }

  //calculate the intersection of two sets
  //intersect(a, b) {
  //  return [...new Set(a)].filter(x => new Set(b).has(x));
  //}

  render() {
    return(
      <div>
        <h2>Available Clouds</h2>
        <table>
          <tbody>
            <tr>
              <th>Cloud Description</th>
              <th>Cloud Name</th>
              <th>Geo Region</th>
            </tr>
            {this.showData(this.props.data.clouds)}
          </tbody>
        </table>
      </div>
    );
  }
}