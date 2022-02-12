import React from 'react'
import '../styles/BattleField.css'

const Hitpoints = (props) => {
  const { hitPoints, hits } = props;
  let hitPointsCounter = [];
  let hitCounter = [];
  for (let i = 0; i < hitPoints; i++) {
    hitPointsCounter.push(
      (<div className='selected' key={i} style={{ width: '18px', height: '15px' }}></div>)
    )
  }
  for (let j = 0; j < hits; j++) {
    hitCounter.push(
      (<div className='ship' key={j} style={{ width: '18px', height: '15px' }}></div>)
    )
  }
  return (
    <span style={{ display: 'flex' }}>
      {hitPointsCounter}{hitCounter}
    </span>
  )
}

export default Hitpoints
