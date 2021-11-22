import React from "react";
import { DATA } from "../utils/constants";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TablePeopleSummary } from "./TablePeopleSymmary";

const data = DATA

export const AppScreen = () => {
  return (
    <div className="container">
      <div className="flex bg-gray-100">
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              {TableHead(data.names)}
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {TableBody(data.names, data.flavors)}
            {TablePeopleSummary(data.names, data.flavors)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
