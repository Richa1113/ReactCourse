import React from "react";
import ReactDOM from "react-dom";

// const h1 = document.querySelector("h1");
// h1.innerHTML = "Hello World! i m JS :)";

//react
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "xyz",
  },
  "Hello World! form react!"
);
//heading is not an html tag its a react element here, which is a js object
//("element name", {attributes}, "child of parent element, though text or something else")
//console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//nested elements in react
/* <div id="parent">
      <div id="child">
         <h1>I am h1 tag</h1>
      </div>
    </div>
*/

const div = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id : "child"},
React.createElement("h1", {}, "Now loaded from npm")));
//root.render(div);

/* <div id="parent">
      <div id="child">
         <h1>I am an h1 tag</h1>
         <h2>I am an h2 tag</h2>
      </div>
    </div>
*/

const div2 = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id : "child"},
[React.createElement("h1", {}, "I am h1  tag"), 
React.createElement("h2", {}, "Now from import react")]));
root.render(div2);