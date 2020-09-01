import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
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

    return (
    <>
      <Header />
        <main className='App'>
          <Sidebar />
          <Main />
        </main>
    </>
    );
  }
}