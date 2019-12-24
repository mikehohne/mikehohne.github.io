import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioPageDetail from './pages/Portfolio/PortfolioPageDetail';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <MainContainer>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Landing} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route
              exact
              path='/portfolio/:id'
              component={PortfolioPageDetail}
            />
          </Switch>
        </MainContainer>
      </Router>
    </>
  );
}

export default App;
