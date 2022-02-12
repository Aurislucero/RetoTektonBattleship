import React from 'react';
import Cell from "./Cell";
import StartButton from "./StartButton";
import '../styles/BattleField.css';

export default (props) => {
  let { battleField, hits, onCellClick, onClick, screenMode,turn,shots} = props;
  return (
    <div className='cardgame'>
      {!battleField && hits !== 20  && 
      <div className={`${screenMode === 'tablet' && 'centered'}`}>
           <div>
           <StartButton onClick={() => onClick()}/>
           </div>
      </div>
      }
      {battleField && ( hits < 20  && turn>shots) &&
          <div className="board">
          {battleField.map((row, x) => (
            <div className="" key={x}>
              {row.map((column, y) => (
                <Cell
                key={x + "" + y}
                onCellClick={() => onCellClick(x, y)}
                x={x}
                y={y}
                cellState={column}
                />
              ))}
            </div>
          ))}
        </div>
      }
      {hits === 20 || turn==shots &&
      <div className={`emptyBattleField ${screenMode === 'tablet' && 'centered'}`}>
            <div className='text-center'>
              <h1>Game over</h1>
              <StartButton onClick={() => onClick()}/>
            </div>
      </div>
      }
    </div>
  );
}
