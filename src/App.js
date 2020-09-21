import React, {Fragment} from 'react';
import {FirstProvider} from './contexts/FirstContext';
import FirstPage from './components/firstpage';
import Menu from './components/menus/menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <FirstProvider>
      <Router>
        <Switch>
          <Route path ='/' exact component={FirstPage}/> 
          <Route path ='/menu' exact component={Menu}/> 
        </Switch>
      </Router>
    </FirstProvider>
  );
}

export default App;
