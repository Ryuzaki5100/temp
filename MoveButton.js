import React from "react";
import './CubeComp.css'

function MoveButton({addMoveToArray,moveName})
{
    function updateMove(mov){
        addMoveToArray(mov);
    }
    return (
        <div className="MoveButton" onClick={(event)=>updateMove(event.target.innerHTML)}>
            {moveName}
        </div>
    )
}

export default MoveButton