import React from 'react';
import {Header} from './componet/header/Header';
import './style.css'
import Lunches from './componet/header/Lunch/lunches';
import Luncheslist from './componet/header/luncheslist/luncheslist'
import Launchview from './componet/header/Launchview/launchview';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
    <Header/>
    <Switch>
    <Route path="/view/:flight_number">
        <Launchview/>
    </Route>
    <Route path="/">
        <Luncheslist/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
