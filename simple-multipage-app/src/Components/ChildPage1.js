import React, { Component } from "react";
import axios from "axios";

export class ChildPage1 extends Component {
  constructor(props) {
    super(props);

    this.refTable1 = React.createRef();
    this.state = {
      data: [
        // {
        //   id: 1,
        //   name: "Name",
        //   shortName: "Short name",
        //   country: "Country",
        //   marketPlace: "Market Place",
        //   timeZone: "Time Zone"
        // }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://exchangewebsiteapi.azurewebsites.net/exchangeDetails")
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch(exception => {
        alert("Error while fetching data");
      });
  }

  render() {
    const data = this.state.data;
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
            {data.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.shortName}</td>
                <td>{item.country}</td>
                <td>{item.marketPlace}</td>
                <td>{item.timeZone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChildPage1;
