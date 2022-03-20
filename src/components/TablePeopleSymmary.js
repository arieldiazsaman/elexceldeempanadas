import React from "react";

export const TablePeopleSummary = (names, flavors) => {
  const flavorKeys = Object.keys(flavors);
  const nameKeys = Object.keys(names);
  let totalSum = 0;
  return (
    <tr>
      <td>+</td>
      {nameKeys.map((nameKey, nameKeyIndex) => {
        let sum = 0;
        flavorKeys.forEach((flavorKey) => {
          const flavorAmount = names[nameKey].flavors[flavorKey];
          if (flavorAmount) sum += names[nameKey].flavors[flavorKey];
        });
        totalSum += sum;
        return (
          <td key={nameKeyIndex} id={`${nameKey}-summary`}>
            {sum}
          </td>
        );
      })}
      <td>{totalSum}</td>
    </tr>
  );
};
