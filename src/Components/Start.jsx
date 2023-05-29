import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className="d-flex flex-column vh-100 justify-content-center align-items-center bg-start" 
        style={{ height: '100vh',   padding: '20px' }}>
          <h1 className="text-center text-white mb-5" style={{ fontSize: '3rem', fontWeight: 'bold',fontFamily: 'cursive' }}>QuizZen</h1>
          <button
            onClick={() => setStart(true)}
            className="btn btn-outline-primary rounded-circle p-4 fs-3 shadow-sm"
            style={{background:'blue',  borderColor: 'blue',  border:'solid red 2px', borderStyle:'double', color: 'white' }}
          >
            Start
          </button>
        </div>
      );
      
      
}
