import './App.css';
import React , {useState} from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndQuiz from './components/EndQuiz';
import { MyContext } from './helper/Contexts';
function App() {
  const [GameState, setGameState] = useState('menu');
  const [Score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {GameState==='menu'?
      <MyContext.Provider value={{GameState,setGameState,Score,setScore}}><MainMenu/></MyContext.Provider>:
      null}
      {GameState==='quiz'?
      <MyContext.Provider value={{GameState,setGameState,Score,setScore}}><Quiz/></MyContext.Provider>:
      null}
      {GameState==='endquiz'?
      <MyContext.Provider value={{GameState,setGameState,Score,setScore}}><EndQuiz/></MyContext.Provider>:
      null}
    </div>
  );
}

export default App;
