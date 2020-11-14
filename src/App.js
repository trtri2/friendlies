import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Bracket from './components/Bracket'
import Form from './components/Form'

function App() {
  return (
      <Router>
        <Header/>
        <div className="p-3 container">
              <Switch>
                <Route path ="/bracket" exact component={Bracket}/>
                <Route path ="/form" exact component={Form}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
