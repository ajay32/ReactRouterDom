import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact';
import Dashboard from './Dashboard.js';
import Error from './Error.js';

// client side routing (no page reloading with router)
 // Switch create url for pages & return the first it matches
 // exact mean if something matches with only / then only render about
 // /contact if we dont use exact it will render / this path

const Root = () => {

    const Inner = () => { //Inner component with Arrow functions
       return <h2>Inner Component</h2>
    };

      return (
        <>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/contact' component={Contact} />
            <Route  path='/about' component={About} />
            <Route path='/contact/inner' component={Inner} />
            <Route component={Error} />
        </Switch>
        </>
      );
    
  }
  
  export default Root;