import React from "react";
import { Flavors } from "./Flavors";
import { People } from "./People";
import { TotalFlavors } from "./TotalFlavors";

export const AppScreen = () => {
  const data = {
    names: {
      jorge: {
        jamonyqueso: 1,
        carne: 2,
      },
      ariel: {
        jamonyqueso: 2,
        carne: 2,
      },
    },
    // names: [
    //   {
    //     name: "Jorge",
    //     flavors: {
    //       carne: 2,
    //       jamon: 2,
    //     },
    //   },
    //   {
    //     name: "Ariel",
    //     flavors: {
    //       carne: 3,
    //       jamon: 4,
    //     },
    //   },
    // ],
    flavors: {
      jamonyqueso: "Jamon y queso",
      carne: "Carne",
    },
  };
  const names = Object.keys(data.names);
  console.group("AppScreen");
  console.log("data:", data);
  console.log("Ok:", Object.keys(data.names));
  console.groupEnd();

  console.group("names");
  names.map((name) => console.log(name));
  console.groupEnd();
  return (
    <div className="container">
      <div className="flex bg-gray-100">
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>Jorge</th>
              <th>Ariel</th>
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carne</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Jamon y queso</td>
              <td>2</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>+</td>
              <td>4</td>
              <td>7</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        {/* <Flavors flavors={data.flavors} />
                <People data={data} />
                <TotalFlavors data={data} /> */}
      </div>
    </div>
  );
};
