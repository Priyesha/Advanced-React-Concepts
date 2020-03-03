import React from "react";

function Columns() {
  const items = [
    {
      name: "A",
      age: 32,
      skill: "react",
    },
    {
      name: "B",
      age: 22,
      skill: "angular",
    },
  ];

  return (
    // <React.Fragment>
    //     <td>Name</td>
    //     <td>AGE</td>
    //     <td>Skill</td>
    // </React.Fragment>

    // Shorthand method
    items.map((item) => (
      <React.Fragment key={item.name}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.skill}</td>
      </React.Fragment>
    ))
  );
}

export default Columns;
