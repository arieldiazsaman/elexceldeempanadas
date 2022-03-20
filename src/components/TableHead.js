import React from "react";

export const TableHead = (names) => {
  const keys = Object.keys(names);
  return keys.map((key, index) => (
    <th key={index} id={key}>
      {names[key].name}
    </th>
  ));
};
