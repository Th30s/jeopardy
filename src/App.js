import React,{useState} from 'react';
import './App.css';
import Question from './Question.js';
import questionData from './question-data.json';
import { fuchsia } from 'color-name';


function App() {
    let [showBoard,setStateNum]=useState("board");
    function showBoardFunction(){
        if(showBoard == "board") {
            setStateNum(showBoard="board hidden")
            console.log(showBoard)
            console.log(showBoard)
        } else if (showBoard == "board hidden"){
            setStateNum("board")
            console.log(showBoard)
            console.log(showBoard)
        }
    }


return (
    <div className="App">
        <h1> Jeopardy </h1>
        <div className = {showBoard} onClick={showBoardFunction}>
            {/* Column - 1 (HISTORY) */}
            <div className="column">
                <Question QstnVal={100} answer={questionData.questions[0].answer} clue={questionData.questions[0].clue}/>
                <Question QstnVal={200} answer={questionData.questions[1].answer} clue={questionData.questions[1].clue}/>
                <Question QstnVal={300} answer={questionData.questions[2].answer} clue={questionData.questions[2].clue}/>
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                <Question QstnVal={100} answer={questionData.questions[3].answer} clue={questionData.questions[3].clue}/>
                <Question QstnVal={200} answer={questionData.questions[4].answer} clue={questionData.questions[4].clue}/>
                <Question QstnVal={300} answer={questionData.questions[5].answer} clue={questionData.questions[5].clue}/>
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column" >
                <Question QstnVal={100} answer={questionData.questions[6].answer} clue={questionData.questions[6].clue}/>
                <Question QstnVal={200} answer={questionData.questions[7].answer} clue={questionData.questions[7].clue}/>
                <Question QstnVal={300} answer={questionData.questions[8].answer} clue={questionData.questions[8].clue}/>
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
