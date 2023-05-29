import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';


export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <>
            <Box current={current} next={setCurrent} />
        </>
    )
}


const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-main ">
          <div className="container p-4 col-sm-5 col-11 border bg-white shadow-lg rounded-4 overflow-hidden">
            <div style={{fontFamily: 'serif', color: ''}} className="p-2 h3">{current + 1}. {quizzes[current].question}</div>
            <div className="row mt-3">
              <div
                className={`col-6 p-2 border rounded-4 ${ans === "a" ? "bg-primary text-white " : ""} cursor-pointer`}
                onClick={() => setAns("a")}
              >
                {quizzes[current].a}
              </div>
              <div
                className={`col-6 p-2 border rounded-4 ${ans === "b" ? "bg-primary text-white" : ""} cursor-pointer`}
                onClick={() => setAns("b")}
              >
                {quizzes[current].b}
              </div>
              <div
                className={`col-6 p-2 border rounded-4 ${ans === "c" ? "bg-primary text-white" : ""} cursor-pointer`}
                onClick={() => setAns("c")}
              >
                {quizzes[current].c}
              </div>
              <div
                className={`col-6 p-2 border rounded-4 ${ans === "d" ? "bg-primary text-white" : ""} cursor-pointer`}
                onClick={() => setAns("d")}
              >
                {quizzes[current].d}
              </div>
            </div>
            <div className="d-flex justify-content-between pt-4">
              <div className="btn btn-warning rounded-4" onClick={() => setAns("")}>Reset</div>
              <div className="btn btn-primary rounded-4" onClick={saveHandler}>Save &amp; Next</div>
              <div className="btn btn-danger rounded-4" onClick={() => setExit(true)}>Exit</div>
            </div>
          </div>
        </div>
      );
      
      
}