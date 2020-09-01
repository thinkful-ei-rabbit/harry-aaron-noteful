import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

import './App.css';

import Main from './Main';

export default class App extends React.Component {
  state = { 
    folders: [],
    notes: [],
  };

  render() {
    const { folders, notes } = STORE
    console.log (folders);
    return (
    <>
      <Header />
        <main className='App'>
<<<<<<< Updated upstream
          <Sidebar />
          <Main />
=======
          <Route path='/'>
            <Sidebar folders={folders} />
          </Route>
          <Route path='/notes'>
            <Main notes={notes} />
          </Route>
>>>>>>> Stashed changes
        </main>
    </>
    );
  }
}