import React from 'react'
import "./TicTacto.css"
import circle_icon from '../Assets/o.png'
import cross_icon from '../Assets/x.png'

function TicTacto() {
  return (
    <div className='container'>
        <h1 className='title'>Tic Tac Game In <span>React</span></h1>
       <div className="board">

       </div>
       <button className= 'reset'>Reset</button>
    </div>
  )
}

export default TicTacto
