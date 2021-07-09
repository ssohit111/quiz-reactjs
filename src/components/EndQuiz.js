import React,{useContext} from 'react'
import { MyContext } from '../helper/Contexts'
import { Questions } from '../helper/QuestionSet'
function EndQuiz() {
    const {setGameState,Score,setScore}=useContext(MyContext);
    var var1=Score*100;
    var1=var1/Questions.length;
    const RestartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="endthequiz">
            <h2>The Quiz is Finished!!!!</h2>
            {
                (Score<(Questions.length/2))?(<h2>Oops You Got Only {Score}/{Questions.length} Correct Answers i.e {var1} % Correct Answers!!!!! Better Luck Next Time</h2>):(<h2>Hurray You Got {Score}/{Questions.length} Correct Answers i.e {var1} % Correct Answers!!!!! It's Party Time .</h2>)
            }
            <br /><br /><br />
            <button onClick={RestartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndQuiz
