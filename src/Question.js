import React,{useState} from 'react';

export default function Question(props) {
    let QstnVal;
    let boardState;
    let [stateNum,setStateNum]=useState(props.QstnVal);
    function showClue(){
        setStateNum(stateNum = props.clue);

        console.log(stateNum);
    }
    function showAnswer(){
        
    }

    return(
        <div onClick={showClue}>
            {/* <p>{props.clue}</p> */}
            <h1>{stateNum}</h1>
        </div>
    );
}