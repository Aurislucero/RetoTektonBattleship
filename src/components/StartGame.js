import React from 'react'
import { Card, Button, Row, Col, FormControl } from 'react-bootstrap';
import image from '../assets/img/231691_1.jpg';
import Battleshiptitle from './Battleshiptitle';
import { LogicContext } from '../context/LogicProvider';
import { withRouter } from "react-router-dom";
import '../styles/BattleField.css'
const StartGame = (props) => {
    const { sendTurn, turn, setTurn, changePage, setChangePage } = React.useContext(LogicContext);
    React.useEffect(() => {
        if (changePage) {
            props.history.push('/field')
            setChangePage(false)
        }
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Card className='firstCard'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        <Battleshiptitle />
                    </Card.Title>
                    <Card.Text>
                        INGRESAR N° DE TURNOS
                    </Card.Text>
                    <FormControl
                        aria-label="Text input with checkbox"
                        type='number'
                        onChange={e => setTurn(e.target.value)}
                        value={turn}
                    />
                    <Button style={{ backgroundColor: '#85b200', borderColor: '#85b200', border: 0, padding: '20px', borderRadius: '20px' }}
                        onClick={() => { sendTurn(turn) }}
                    >
                        COMENZAR</Button>
                </Card.Body>
                <Card.Body>
                    <Card.Title>
                        ELEGIR NIVEL
                    </Card.Title>
                    <Row className="mx-0">
                        <Button
                            as={Col}
                            style={{ backgroundColor: '#85b200', borderColor: '#85b200', border: 0, padding: '20px', borderRadius: '20px' }}
                            onClick={() => { sendTurn(50) }}
                        >FACIL</Button>
                        <Button
                            as={Col}
                            style={{ backgroundColor: '#85b200', borderColor: '#85b200', border: 0, padding: '20px', borderRadius: '20px' }}
                            className="mx-2"
                            onClick={() => { sendTurn(100) }}
                        >
                            MEDIO</Button>
                        <Button
                            as={Col}
                            style={{ backgroundColor: '#85b200', borderColor: '#85b200', border: 0, padding: '20px', borderRadius: '20px' }}
                            onClick={() => { sendTurn(500) }}
                        >
                            DIFICIL</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>

    )
}

export default withRouter(StartGame)