import React,{useState} from 'react';
import { fuchsia } from 'color-name';

export default function Question(props) {
    let QstnVal;
    let [stateNum,setStateNum]=useState(props.QstnVal);
    function showClue(){
        setStateNum(stateNum = props.clue); 
    }
    // function showAnswer(){
    //     if (stateNum == props.clue){
    //         stateNum = props.answer
    //     }
    // }

    return(
        <div onClick={props.onClick}>
            {/* <p>{props.clue}</p> */}
            <h1>{stateNum}</h1>
        </div>
    );
}