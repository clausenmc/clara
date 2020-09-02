import React from 'react';
import './App.css';
import NewPhoto from './components/NewPhoto'
import CardList from './components/CardList'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
            <Route exact path='/photos' component = {CardList}/>
            <Route exact path='/photos/create' component = {NewPhoto}/>
            <Route exact path='/'>
              <div className="wrapper">
                <p>Esto es una prueba técnica para Clara</p>
                <nav className="nav">
                  <a className="button nav" href="/photos/create">New photo</a>
                  <a className="button nav" href="/photos">Photos</a>
                </nav>
              </div>
            </Route>

        </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
