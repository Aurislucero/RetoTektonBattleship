import React, { Component } from 'react';
class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick(x, y, cellState) {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      this.props.onCellClick(x, y);
    }
  }

  render() {
    let { cellState, x, y } = this.props;
    return (
      <div
        className={
          `cell tableCell ${cellState === 'miss' ? "selected " : ""}${cellState === 'hitted' ? "ship" : ""}`
        }
        onClick={() => this.onClick(x, y, cellState)}
      />
    );
  }
}

export default Cell;
