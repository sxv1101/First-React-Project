import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Basic React App"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Best pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "pineapple and ham",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "chiken on pizza?",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
