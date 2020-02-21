import React, { Component } from "react";
import axios from "axios";

export class ChildPage1 extends Component {
  constructor(props) {
    super(props);

    this.refTable1 = React.createRef();
    this.state = {
      data: [
        {
          id: 1,
          name: "Name",
          shortName: "Short name",
          country: "Country",
          marketPlace: "Market Place",
          timezone: "Time Zone"
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://exchangewebsiteapi.azurewebsites.net/exchangeDetails")
      .then(response => {
        console.log(this.refTable1);
        console.log(response);
      })
      .catch(exception => {
        alert("Error while fetching data");
      });
  }

  render() {
    return (
      <div className="card-body">
        <h3 className="card-title text-center">Content Area</h3>
        <h4 className="card-text text-center">Page 1</h4>

        <table
          className="table table-striped table-bordered"
          ref={this.refTable1}
        >
          <thead>
            <tr>
              <th scope="id">#</th>
              <th scope="name">Name</th>
              <th scope="shortName">Short Name</th>
              <th scope="country">Country</th>
              <th scope="marketPlace">Market Place</th>
              <th scope="timeZone">Time Zone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChildPage1;
