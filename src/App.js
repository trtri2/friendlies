import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Bracket from './components/Bracket'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"#E27D60"}}>
        <div className="p-5" style={{backgroundColor: "#41B3A3"}}>
            <Header/>
            <Switch>
              <Route path ="/bracket" exact component={Bracket}/>
              <Route path ="/form" exact component={Form}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
