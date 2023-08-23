import React from "react"
import ReactDOM from 'react-dom'


// React.createElement=ReactElement(js object)=> HTMLElement(render)
var heading=React.createElement("h1",{id:"heading"},"I am core react heading!!");

console.log(heading)
// babel transpile code into react code
//jsx=Bable transpile to ReactElement(js object)=> HTMLElement(render)

var ele=(
    <span>React Element</span>
)
 
   

// components
//1. class based components
//2. Functional components

var num=123
//Component Composisation
const HeadingComponent=()=>{
   return  (

        <div className="container">
        <h1>I am react functional component</h1>
        </div>
    )
}

var Title=(
    
    <h1> {ele} Namaste React
        <HeadingComponent/>
    </h1>
)

         
var root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Title);


