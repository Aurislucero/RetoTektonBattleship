import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Flotilla from './../components/Flotilla';
import Scores from "./../components/Scores";
import '../styles/BattleField.css'
export default (props) => {
  const { flotilla, hits, shots ,turn } = props;
  return (
    <Col>
      <Row>
        <div className='scoresPanel'>
          <Col md={6} xs={12}>
            <Scores hits={hits} shots={shots} turn={turn}/>
          </Col>
          <Col>
            <Flotilla flotilla={flotilla}/>
          </Col>
        </div>
      </Row>
    </Col>
  )
}
