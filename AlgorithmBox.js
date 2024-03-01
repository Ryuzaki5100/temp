import React from "react";
import './CubeComp.css';

function AlgorithmBox({currentMoves,removeMoveFromArray})
{
    function deleteLastMove()
    {
        removeMoveFromArray();
    }
    return(
        <div className='AlgorithmLabel'>
                <p className='AlgorithmTextName'>Algorithm:</p>
                <p className='AlgorithmInfo'>
                    {currentMoves}
                </p>
                <p className="DeleteButton" onClick={deleteLastMove}>Delete</p>
        </div>
    )
}

export default AlgorithmBox