import React,{useState} from 'react';

export default function Question(props) {
    let [stateNum,setStateNum]=useState(props.answer);
    function num(){
        setStateNum(stateNum = props.clue);
        console.log(stateNum);
    }
    return(
        <div onClick={num}>
            {/* <p>{props.clue}</p> */}
            <h1>{stateNum}</h1>
        </div>
    );
}