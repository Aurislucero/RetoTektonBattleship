import React from 'react'

const Scores = (props) => {
  const { hits, shots, turn } = props;
  return (
    <>
      <div>
        <h3>Tienes {turn} turnos</h3>
        <div className='scorePanel text-center'>
          <div className='scoreHits'>
            <h2 className='scores'>{hits}</h2>
            <hr />
            <p className='scoreText'>Hits</p>
          </div>
          <div className='scoreShots'>
            <h2 className='scores'>{shots}</h2>
            <hr />
            <p className='scoreText'>Shots</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Scores
