import React from "react";

export const TableBody = (names, flavors) => {
  const flavorKeys = Object.keys(flavors);
  const nameKeys = Object.keys(names);
  return flavorKeys.map((flavorKey, flavorIndex) => {
    let sum = 0;
    return (
      <tr key={flavorIndex}>
        <td>{flavors[flavorKey]}</td>
        {nameKeys.map((nameKey, nameKeyIndex) => {
          const flavorAmount = names[nameKey].flavors[flavorKey];
          if (flavorAmount) sum += flavorAmount;
          return (
            <td key={nameKeyIndex} id={`${nameKey}-${flavorKey}`}>
              {flavorAmount || 0}
            </td>
          );
        })}
        <td id={`${flavorKey}-summary`}>{sum}</td>
      </tr>
    );
  });
};
