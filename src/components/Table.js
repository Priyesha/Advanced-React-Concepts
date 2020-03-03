import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Skill</th>
        </tr>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
