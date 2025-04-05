import React from "react";
import ReactDOM from "react-dom/client";

const world = React.createElement("em", null, "world");
const title = React.createElement("h1", null, ["Hello", world, "!"]);
const domElement = document.getElementById("root");
const root = ReactDOM.createRoot(domElement);
root.render(title);
