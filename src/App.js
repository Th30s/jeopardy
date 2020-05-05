import React,{useState} from 'react';
import './App.css';
import Question from './Question.js';
import questionData from './question-data.json';
import { fuchsia } from 'color-name';


function App() {
    let [showBoard,setStateNum]=useState("board");
    let [showQuestion, setStateVal] = useState("board hidden")
    let [clue, setStateClue] = useState(questionData.questions[0].clue)
    function showBoardFunction(){
        if(showBoard == "board") {
            setStateNum(showBoard="board hidden")
            setStateVal(showQuestion="board")
        } else if (showBoard == "board hidden"){
            setStateNum(showBoard = "board")
            setStateVal(showQuestion = "board hidden")
        }
    }
    function showBoardFunctionI(i) {
        let showBoardFunction= function() {
            console.log(i)
            if(showBoard == "board") {
                setStateNum(showBoard="board hidden")
                setStateVal(showQuestion="")
                setStateClue(questionData.questions[i].clue)
            } else if (showBoard == "board hidden"){
                setStateNum(showBoard = "board")
                setStateVal(showQuestion = "board hidden")
            }
        }
        return showBoardFunction
    }

    function showBoardFunctionII(){
        // if(setStateClue() == questionData.questions[2].clue){
            setStateClue(questionData.questions[1].answer)
        
        
    }

    
    

return (
    <div className="App">
        <h1> Jeopardy </h1>
        <h1 className = {showQuestion} onClick = {showBoardFunctionII}>  {clue}</h1>
        <div className = {showBoard} >
            {/* Column - 1 (HISTORY) */}
            <div className="column">
                <Question onClick = {showBoardFunctionI(0)} QstnVal={100}  answer={questionData.questions[0].answer} clue={questionData.questions[0].clue}/>
                <Question onClick = {showBoardFunctionI(1)} QstnVal={200} answer={questionData.questions[1].answer} clue={questionData.questions[1].clue}/>
                <Question onClick = {showBoardFunctionI(2)} QstnVal={300} answer={questionData.questions[2].answer} clue={questionData.questions[2].clue}/>
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                <Question onClick = {showBoardFunctionI(3)} QstnVal={100} answer={questionData.questions[3].answer} clue={questionData.questions[3].clue}/>
                <Question onClick = {showBoardFunctionI(4)} QstnVal={200} answer={questionData.questions[4].answer} clue={questionData.questions[4].clue}/>
                <Question onClick = {showBoardFunctionI(5)} QstnVal={300} answer={questionData.questions[5].answer} clue={questionData.questions[5].clue}/>
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column" >
                <Question onClick = {showBoardFunctionI(6)} QstnVal={100} answer={questionData.questions[6].answer} clue={questionData.questions[6].clue}/>
                <Question onClick = {showBoardFunctionI(7)} QstnVal={200} answer={questionData.questions[7].answer} clue={questionData.questions[7].clue}/>
                <Question onClick = {showBoardFunctionI(8)} QstnVal={300} answer={questionData.questions[8].answer} clue={questionData.questions[8].clue}/>
            </div>
        </div>
        <h1> 
            <Question answer={questionData.questions[0].answer} clue={questionData.questions[0].clue}/>
            <Question answer={questionData.questions[4].answer} clue={questionData.questions[4].clue}/>
            <Question answer={questionData.questions[8].answer} clue={questionData.questions[8].clue}/>
        </h1>
    </div>
  );
}

export default App;
