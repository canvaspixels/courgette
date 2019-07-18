import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";

it("renders without crashing", () => {
  const div = global.document.createElement("div");
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
