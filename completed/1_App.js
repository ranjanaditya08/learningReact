import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement(
    "h1", 
    { id: "heading" }, 
    "Hello React"
);

console.log(heading); // heading is not an h1 tag it's only an Object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // converts object into h1 tag

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm Aditya"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1"),
    React.createElement("h2", {}, "I'm tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
