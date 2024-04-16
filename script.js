import React from "react";
import ReactDOM from "react-dom/client";

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

//react element
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

//react element
const div2 = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id : "child"},
[React.createElement("h1", {}, "I am h1  tag"), 
React.createElement("h2", {}, "Now from import react")]));
//root.render(div2);
console.log(div2); //both are objects


//react element
const jsxheading = <h1 id="heading">I am jsx</h1>;
//root.render(jsxheading);
console.log(jsxheading); //both are objects

//React component
const HeadingComponent = () => (
<h1 id="header">Now I am react component</h1>);
//root.render(<HeadingComponent/>);

const DivHeading = () => (
  <div>
    <h1 id="header"> me too a react component in div</h1>
  </div>
);
//root.render(<DivHeading/>);

//component composition

const Title = () => (
   <>
    <p>I am react component paragraph</p>
   </>
);

const TitleTop = () => (
  <div>
    <Title/>       
  </div>
);

//root.render(<TitleTop/>);

const FunctionSyntax = function(){
    return (
      <h1>i am proper function syntax react component</h1>
    )
};

//root.render(<FunctionSyntax/>);

//react element inside react component
const Comp = () => (
  <>
   {jsxheading}
   <DivHeading/>
   <DivHeading></DivHeading>
   {DivHeading()}
   </>
);

root.render(<Comp/>);