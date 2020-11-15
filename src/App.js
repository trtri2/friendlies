import React from 'react'
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Bracket from './components/Bracket'
import Form from './components/Form'

function App() {
  return (
    <HashRouter basename="/">
      <Router>
        <Header/>
        <div className="p-3 container">
              <Switch>
                <Route path ="/friendlies/bracket" exact component={Bracket}/>
                <Route exact path ="/friendlies" exact component={Form}/>
              </Switch>
          </div>
      </Router>
    </HashRouter>
  );
}

export default App;
