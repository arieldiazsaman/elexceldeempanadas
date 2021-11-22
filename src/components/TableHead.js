import React from "react";

export const TableHead = (names) => {
    const keys = Object.keys(names);
    return keys.map((key) => <th>{names[key].name}</th>);
}