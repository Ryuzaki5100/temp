import React from "react";
import './CubeComp.css'

function CubeStat({ applySelectedColor }) {
    function changeColor(box) {
        box.style.backgroundColor = applySelectedColor();
    }
    return (
            <div className="cubeConfiguration">
                <div style={{ marginLeft: '70px' }}>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                </div>
                <div className="containerColorFillRep4">
                    <div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                        <div className="containerColorFillRep3">
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                            <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '70px' }}>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                    <div className="containerColorFillRep3">
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                        <div className="color-box" onClick={(event) => { changeColor(event.target) }}></div>
                    </div>
                </div>
            </div>
    );
}

export default CubeStat;