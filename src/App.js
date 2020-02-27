import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
// import Error from './components/Error';
import Navigation from './components/Navigation';

import './App.scss';

import bigCircle from './images/big-eclipse copy.svg';
import midCircle from './images/mid-eclipse copy.svg';
import smallCircle from './images/small-eclipse copy.svg';


class App extends React.Component  {
  render () {
    return (
      <BrowserRouter>
          <Navigation/>
          <Switch>
              <Route path="/" component = {Home} exact/>
              <Route path="/skills" component = {Skills}/>
              <Route path="/projects" component = {Projects}/>
              <Route path="/experience" component = {Experience}/>
              <Route path="/education" component = {Education}/>
              <Route path="/contact" component = {Contact}/>
              <Route component={Home}/>
          </Switch>
          <img className="big-circle" src={bigCircle} alt="big_circle"/>
          <img className="mid-circle" src={midCircle} alt="mid-circle"/>
          <img className="small-circle" src={smallCircle} alt="small-circle"/>
      </BrowserRouter>
      
    );
  }
  }
  

export default App;
