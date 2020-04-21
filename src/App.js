import React from 'react';
import './App.css';
import Question from './Question.js';
import questionData from './question-data.json';
import { fuchsia } from 'color-name';


function App() {
  

  return (
    <div className="App">
        <h1> Jeopardy </h1>
        <div className="board" >
            {/* Column - 1 (HISTORY) */}
            <div className="column">
                <Question answer={questionData.questions[0].answer} clue={questionData.questions[0].clue}/>
                <Question answer={questionData.questions[1].answer} clue={questionData.questions[1].clue}/>
                <Question answer={questionData.questions[2].answer} clue={questionData.questions[2].clue}/>
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                <Question answer={questionData.questions[3].answer} clue={questionData.questions[3].clue}/>
                <Question answer={questionData.questions[4].answer} clue={questionData.questions[4].clue}/>
                <Question answer={questionData.questions[5].answer} clue={questionData.questions[5].clue}/>
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column">
                <Question answer={questionData.questions[6].answer} clue={questionData.questions[6].clue}/>
                <Question answer={questionData.questions[7].answer} clue={questionData.questions[7].clue}/>
                <Question answer={questionData.questions[8].answer} clue={questionData.questions[8].clue}/>
            </div>
        </div>
    </div>
  );
}

export default App;
