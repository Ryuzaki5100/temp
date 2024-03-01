import React from "react";
import './CubeComp.css'

function ColorPalet({ changeSelectedColor }) {

    function setColor(box) {
        changeSelectedColor(box);
        box.parentNode.style.backgroundColor=box.style.backgroundColor;
    }

    return (
        <div className="containerColorPalet" style={{ backgroundColor: changeSelectedColor }}>
            <div className="color-box" id="redPalet" style={{ backgroundColor: 'red' }} onClick={(event) => setColor(event.target)}></div>
            <div className="color-box" id="yellowPalet" style={{ backgroundColor: 'yellow' }} onClick={(event) => setColor(event.target)}></div>
            <div className="color-box" id="greenPalet" style={{ backgroundColor: 'green' }} onClick={(event) => setColor(event.target)}></div>
            <div className="color-box" id="bluePalet" style={{ backgroundColor: 'blue' }} onClick={(event) => setColor(event.target)}></div>
            <div className="color-box" id="orangePalet" style={{ backgroundColor: 'orange' }} onClick={(event) => setColor(event.target)}></div>
            <div className="color-box" id="whitePalet" style={{ backgroundColor: 'white' }} onClick={(event) => setColor(event.target)}></div>
        </div>
    )
}

export default ColorPalet