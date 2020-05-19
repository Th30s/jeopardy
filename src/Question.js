import React,{useState} from 'react';
import { fuchsia } from 'color-name';

export default function Question(props) {
    let [stateNum,setStateNum]=useState(props.QstnVal);
    
    // function showAnswer(){
    //     if (stateNum == props.clue){
    //         stateNum = props.answer
    //     }
    // }

    return(
        <div onClick={props.onClick}>
            {/* <p>{props.clue}</p> */}
            <h1>{props.QstnVal}</h1>
        </div>
    );
}