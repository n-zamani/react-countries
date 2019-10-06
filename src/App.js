import React from 'react';
import './App.scss';
import { Main, Country } from './_pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return <Router>
    <Route path='/' exact component={Main}></Route>
    <Route path='/country/:code' component={Country}></Route>
  </Router>
}

export default App;
