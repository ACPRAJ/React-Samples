import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
