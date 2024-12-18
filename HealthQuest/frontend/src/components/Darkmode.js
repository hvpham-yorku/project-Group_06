import React from "react";
import "./Darkmode.css"

var darkmode = false;

const DarkSwitch = () => {
    document.body.style.backgroundColor = !(darkmode) ? "#add8e6":"#355393" // Change colour of the webpage background
    //document.getElementById("ElementId").style.backgroundColor= !(darkmode) ? "#111111":"#000000"
    return (
        <label className="darkswitch">
            <input type="checkbox" />
            <span className="slider" />
        </label>
    );
};

export default DarkSwitch;