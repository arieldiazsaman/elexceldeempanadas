import React from "react";

import { render, screen } from "../test-utils";

import { AppScreen } from "../../components/AppScreen";
import { DATA as data } from "../../utils/constants";

describe("AppScreen component", () => {
  it("renders correctly", () => {
    render(<AppScreen />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  const names = Object.keys(data.names);
  const flavors = Object.keys(data.flavors);
  const totalNames = names.length;
  const totalFlavors = flavors.length;
  const firstName = names[0];
  const firstFlavor = flavors[0];

  it(`has ${totalNames} names`, () => {
    const { container } = render(<AppScreen />);
    expect(container.querySelectorAll("th").length - 2).toBe(totalNames);
  });

  it(`has ${totalFlavors} flavors`, () => {
    const { container } = render(<AppScreen />);
    expect(container.querySelectorAll("tbody tr").length - 1).toBe(totalNames);
  });

  it(`${firstName} ordered ${data.names[firstName].flavors[firstFlavor]} ${data.flavors[firstFlavor]} empanadas`, () => {
    const id = `#${firstName}-${firstFlavor}`;
    const { container } = render(<AppScreen />);
    const orderNode = container.querySelector(id);
    expect(parseInt(orderNode.textContent)).toBe(
      data.names[firstName].flavors[firstFlavor]
    );
  });
});
