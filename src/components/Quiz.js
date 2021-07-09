import React , {useContext, useState} from 'react'
import '../App.css'
import {Questions} from '../helper/QuestionSet'
import { MyContext } from '../helper/Contexts';
function Quiz() {
    const [CurQues, setCurQues] = useState(0);
    const {setGameState}=useContext(MyContext);
    const {Score,setScore}=useContext(MyContext);
    const [OptionChosen, setOptionChosen] = useState("");
    const changeCurQues=()=>{
        if(Questions[CurQues].answer===OptionChosen){
            setScore(Score+1);
        }
        setCurQues(CurQues+1);
    }
    const FinishQuiz=()=>{
        if(Questions[CurQues].answer===OptionChosen){
            setScore(Score+1);
        }
        setGameState("endquiz");
    }
    return (
        <div className="quiz">
            <h3>Q.({CurQues+1}) . {Questions[CurQues].promt}</h3>
            <div>
                <button onClick={()=>setOptionChosen("A")} className="forfocus">{Questions[CurQues].optionA}</button>
                <button onClick={()=>setOptionChosen("B")} className="forfocus">{Questions[CurQues].optionB}</button>
                <button onClick={()=>setOptionChosen("C")} className="forfocus">{Questions[CurQues].optionC}</button>
                <button onClick={()=>setOptionChosen("D")} className="forfocus">{Questions[CurQues].optionD}</button>
                <br /><br /><br />
            </div>
            {CurQues===Questions.length-1?
            (<button className="nxt" onClick={FinishQuiz} >EndQuiz</button>):
            (<button className="nxt" onClick={changeCurQues} >Next</button>)}
        </div>
    )
}

export default Quiz
