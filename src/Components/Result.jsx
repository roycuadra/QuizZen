import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-main">
          <div className="w-40 border p-3  shadow-lg rounded-4 bg-white overflow-hidden text-center">
            <h2 style={{fontFamily: 'serif'}} className="h3 p-3 my-2 ">{correct} are correct out of {quizzes.length}</h2>
            <button onClick={playAgain} className="btn btn-outline-primary btn-lg rounded-5">Play again</button>
          </div>
        </div>
      );
      
      
}
