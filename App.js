/* 
    <div id="parent">
        <div id="child">
            <h1>I am tag h1</h1>
            <h2>I am tag h2</h2>
        </div>

        <div id="child2">
            <h1>I am tag h1</h1>
             <h2>I am tag h2</h2>
        </div>
    </div>


*/

// JSX: we use JSX to create complext html syntax but not createHtml. 
// CreateHtml is a core syntax of react itslef.

import React from "react"
import ReactDOM from 'react-dom'

var parent= React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child"}, 
    [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]),

    React.createElement("div", {id:"child2"}, 
    [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]),

    React.createElement("div", {id:"child3"}, 
    [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]),
    ])
 
//  var heading=React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "Hello, World from React"
//     );

    console.log(parent) // object
 var root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent); //creating html element and putting into DOM