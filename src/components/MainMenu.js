import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../helper/Contexts'
function MainMenu() {
    const {setGameState}=useContext(MyContext)
    return (
        <div className="Menu">
            <button onClick={()=>setGameState('quiz')}>Start Quiz</button>
        </div>
    )
}

export default MainMenu
