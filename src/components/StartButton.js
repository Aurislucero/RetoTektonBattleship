import React from 'react'

const StartButton = (props) => {
  const { onClick, text } = props;
  return (
    <div className='text-center'style={{marginTop:'20px'}}>
      <button style={{ backgroundColor: ' #85b200', borderColor: '#85b200' ,border:0,borderRadius:'20px'}} onClick={() => onClick()}>{text ? text : <h1>Start new game</h1>}</button>
    </div>
  )}

export default StartButton

