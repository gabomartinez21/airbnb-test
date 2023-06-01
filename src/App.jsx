import { useState } from 'react'
// import { Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
function App() {

  return (
    <Router>
      <Header />
        
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/search/:id">
          <Home />
        </Route>

      </Switch>
    </Router>

  )
}

export default App
