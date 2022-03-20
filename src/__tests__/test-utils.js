import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";

function render(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return children;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
