import { render } from "enzyme";
import React from "react";
import { Flavors } from "./Flavors";
import { People } from "./People";
import { TotalFlavors } from "./TotalFlavors";

export const AppScreen = () => {
  const data = {
    names: {
      jorge: {
        name: "Jorge",
        flavors: {
          jamonyqueso: 1,
          carne: 2,
        },
      },
      ariel: {
        name: "Ariel",
        flavors: {
          jamonyqueso: 2,
          carne: 2,
        },
      },
      lujan: {
        name: "Lujan",
        flavors: {},
      },
    },
    flavors: {
      jamonyqueso: "Jamon y queso",
      carne: "Carne",
      pollo: "Pollo",
    },
  };

  const renderHead = (names) => {
    const keys = Object.keys(names);
    return keys.map((key) => <th>{names[key].name}</th>);
  };

  const renderBody = (names, flavors) => {
    const flavorKeys = Object.keys(flavors);
    const nameKeys = Object.keys(names);
    return flavorKeys.map((flavorKey) => {
      let sum = 0;
      return (
        <tr>
          <td>{flavors[flavorKey]}</td>
          {nameKeys.map((nameKey) => {
            const flavorAmount = names[nameKey].flavors[flavorKey];
            if (flavorAmount) sum += flavorAmount;
            return <td>{flavorAmount || 0}</td>;
          })}
          <td>{sum}</td>
        </tr>
      );
    });
  };

  const renderPeopleSummary = (names, flavors) => {
    const flavorKeys = Object.keys(flavors);
    const nameKeys = Object.keys(names);
    let totalSum = 0;
    return (
      <tr>
        <td>+</td>
        {nameKeys.map((nameKey) => {
          let sum = 0;
          flavorKeys.forEach((flavorKey) => {
            const flavorAmount = names[nameKey].flavors[flavorKey];
            if (flavorAmount) sum += names[nameKey].flavors[flavorKey];
          });
          totalSum += sum;
          return <td>{sum}</td>;
        })}
        <td>{totalSum}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="flex bg-gray-100">
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              {renderHead(data.names)}
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {renderBody(data.names, data.flavors)}
            {renderPeopleSummary(data.names, data.flavors)}
          </tbody>
        </table>
        {/* <Flavors flavors={data.flavors} />
                <People data={data} />
                <TotalFlavors data={data} /> */}
      </div>
    </div>
  );
};
