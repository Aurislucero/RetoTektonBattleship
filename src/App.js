import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartGame from './components/StartGame';
import BattleFieldPanel from './components/BattleFieldPanel';
import GamesList from './components/GamesList';

function App() {
    return (
        <>
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact>
                            <StartGame />
                        </Route>
                        <Route path="/list">
                            <GamesList/>
                        </Route>
                        <Route path="/field">
                            <BattleFieldPanel />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>


    );
}

export default App;
