import React from "react";
import ReactDOM from "react-dom/client";
//import { useState } from "react";
import './index.css'

const SomeFunction = () => {


    const colorRandomizer = () => {
        let color = "#";
        let letters = "0123456789ABCDEF"
        for(let i = 0; i < 6 ; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color
    }

    const handleClick = (e) => {
        document.body.style.backgroundColor = colorRandomizer()
        e.target.style.backgroundColor = colorRandomizer()
    }

    return (
        
        <div className="wrapper">
        <button onClick = {handleClick}>Clicke me</button>
        </div>
        
    )
}



const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)
root.render(<SomeFunction />)