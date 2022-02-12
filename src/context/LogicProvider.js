import React from 'react';
export const LogicContext = React.createContext()
const LogicProvider = (props) => {
  const [turn, setTurn] = React.useState('');
  const [changePage, setChangePage] = React.useState(false);
  const sendTurn = (numberofturn) => {
    if (numberofturn) {
      setTurn(numberofturn)
      setChangePage(true)
    }
  }
  return (
    <LogicContext.Provider value={{ sendTurn, turn, setTurn, changePage ,setChangePage}}>
      {props.children}
    </LogicContext.Provider>
  )
}

export default LogicProvider