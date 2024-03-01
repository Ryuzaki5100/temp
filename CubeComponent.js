import React, { useState } from 'react';
import './CubeComp.css';
import CubeStat from './CubeStat';
import ColorPalet from './ColorPalet';
import MoveButton from './MoveButton';
import AlgorithmBox from './AlgorithmBox';

function CubeComponent() {

    const [input, setInput] = useState({ selectedColor: 'white', algorithm: [] });

    function applySelectedColor() {
        return input.selectedColor;
    }

    function addMoveToArray(mov) {
        input.algorithm.push(mov);
        setInput(prevState => { return { ...prevState, algorithm: input.algorithm } });
    }

    function removeMoveFromArray() {
        if (input.algorithm.length > 0) {
            input.algorithm.pop();
            setInput(prevState => { return { ...prevState, algorithm: input.algorithm } });
        }
    }

    function convertArrayToString(alg) {
        var temp = "";
        for (var i = 0; i < alg.length; i++)
            temp = temp + alg[i] + " ";
        console.log(temp);
        return temp;
    }

    function changeSelectedColor(box) {
        setInput(prevState => { return { ...prevState, selectedColor: box.style.backgroundColor } });
        return box.style.backgroundColor;
    }

    return (
        <div className='containerColorFillRep2'>
            <CubeStat applySelectedColor={applySelectedColor} />
            <ColorPalet changeSelectedColor={changeSelectedColor} />
            <div className="AlgorithmBoxBoundary">
                <AlgorithmBox currentMoves={convertArrayToString(input.algorithm)} removeMoveFromArray={removeMoveFromArray} />
            </div>
            <MoveButton addMoveToArray={addMoveToArray} moveName={"R"} />
            <MoveButton addMoveToArray={addMoveToArray} moveName={"R2"} />
            <MoveButton addMoveToArray={addMoveToArray} moveName={"R'"} />
            
        </div>
    )
}
export default CubeComponent