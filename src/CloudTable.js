import React, { Component } from 'react';

export default class CloudTable extends Component {

  //Create table entries for each cloud
  showClouds() {
    console.log(this.props.data.length)
    var cloudDescriptions = [];
    for (var i = 0; i < 70; i++) {
      cloudDescriptions.push(this.props.data.clouds[i].cloud_description);
    }
    return cloudDescriptions.map( c =>
      <tr>
        <td>{c}</td>
      </tr>
    )
  }

  render() {
    return(
      <div>
        <h2>Available Clouds</h2>
        <table>
          <tbody>
            <tr>
              <th>Cloud Description</th>
            </tr>
            {this.showClouds()}
          </tbody>
        </table>
      </div>
    );
  }
}