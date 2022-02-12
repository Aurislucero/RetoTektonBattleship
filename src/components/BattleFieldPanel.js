
import _ from 'lodash'
import React, { Component } from 'react';
import {  Row } from 'react-bootstrap';
import BattleField from './BattleField';
import Stats from "./Stats";
import { shipTypes } from '../constatns/shipsList';
import { getBattleField, makeClone } from '../helpers/generateBattleField';
import { getMaxHits } from '../helpers/getMaxHits';
import { LogicContext } from '../context/LogicProvider';
import { withRouter } from "react-router-dom";
import { Router, Route, Link } from 'react-router'
class BattleFieldPanel extends Component {
  static contextType = LogicContext
  constructor(props) {

    super(props);
    this.state = {
      hitpoints: null,
      battleField: null,
      flotilla: null,
      shots: 0,
      hits: 0,
      maxHits: 0,
      screenMode: null
    }

  }

  componentWillMount() {
    const maxHits = getMaxHits();
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      flotilla: newFlotilla,
      maxHits: maxHits
    });
  }

  onClick() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: getBattleField(),
      hits: 0,
      shots: 0,
      flotilla: newFlotilla,
    })
  }

  resetGame() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: null,
      hits: 0,
      shots: 0,
      flotilla: newFlotilla,
      hitpoints: null
    })
  }

  onCellClick(x, y) {
    let newBattleField = makeClone(this.state.battleField);
    let shot = this.state.shots + 1;
    let hitpoints = 0;
    let hits = this.state.hits;
    let newFlotilla = [...this.state.flotilla];
    let cellValue = this.state.battleField[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newFlotilla[0].hits = newFlotilla[0].hits + 1;
          hitpoints = newFlotilla[0].hitPoints
          break;
        case 200:
          newFlotilla[1].hits = newFlotilla[1].hits + 1;
          hitpoints = newFlotilla[1].hitPoints
          break;
        case 300:
          newFlotilla[2].hits = newFlotilla[2].hits + 1;
          hitpoints = newFlotilla[2].hitPoints
          break;
        case 400:
          newFlotilla[3].hits = newFlotilla[3].hits + 1;
          hitpoints = newFlotilla[3].hitPoints
          break;
        case 500:
          newFlotilla[4].hits = newFlotilla[4].hits + 1;
          hitpoints = newFlotilla[4].hitPoints
          break;
        case 600:
          newFlotilla[5].hits = newFlotilla[5].hits + 1;
          hitpoints = newFlotilla[5].hitPoints
          break;
        case 700:
          newFlotilla[6].hits = newFlotilla[6].hits + 1;
          hitpoints = newFlotilla[6].hitPoints
          break;
        case 800:
          newFlotilla[7].hits = newFlotilla[7].hits + 1;
          hitpoints = newFlotilla[7].hitPoints
          break;
        case 900:
          newFlotilla[8].hits = newFlotilla[8].hits + 1;
          hitpoints = newFlotilla[8].hitPoints
          break;
        case 1000:
          newFlotilla[9].hits = newFlotilla[9].hits + 1;
          hitpoints = newFlotilla[9].hitPoints
          break;

        default:
          break;
      }
      newBattleField[x][y] = 'hitted';
      hits += 1;
      this.setState({
        battleField: newBattleField,
        hits: hits,
        shots: shot,
        flotilla: newFlotilla,
        hitpoints: hitpoints
      })
    } else {
      newBattleField[x][y] = 'miss';
      this.setState({
        battleField: newBattleField,
        shots: shot
      })
    }
  }

  updateDimensions(dimension) {
    if (dimension < 992) {
      this.setState({
        screenMode: 'tablet'
      })
    } else {
      this.setState({
        screenMode: 'desktop'
      })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateDimensions(window.innerWidth));
    this.updateDimensions(window.innerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions(window.innerWidth));
  }

  render() {
    const { turn } = this.context
    let { battleField, flotilla, hits, screenMode, hitpoints, shots } = this.state;
    let statsPanel = (
      <Stats
        flotilla={flotilla}
        hits={hits}
        shots={shots}
        turn={turn}
      />
    );
    let battleFieldPanel = (
      <BattleField
        hits={hits}
        battleField={battleField}
        onClick={() => this.onClick()}
        onCellClick={(x, y) => this.onCellClick(x, y)}
        screenMode={screenMode}
        hitpoints={hitpoints}
        turn={turn}
        shots={shots}
      />
    );

    return (
      <div className='main-content' style={{ paddingTop: '30px' }}>
        <div>
          <Row className='show-grid'>{battleFieldPanel}{statsPanel}</Row>
        </div>
        <button
        className='btngame'
        onClick={() => {this.props.history.push('/') }}
        >&#129044; Regresar</button>
      </div>
    );
  }
}

export default withRouter(BattleFieldPanel);