import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import FolderList from './FolderList';
import './App.css';

import Main from './Main';

export default class App extends React.Component {
  state = { 
    folders: [],
    notes: [],
  };

  componentDidMount(){
    this.setState(STORE)
    console.log(this.state);
  }

  renderNavRoutes(){
    const{notes, folders} = this.state;
    return(
      <Route exact path="/"
      render={FolderList} />

    )
  }

  render() {

    return (
    <>
  
      <Header />
        <main className='App'>
          {this.renderNavRoutes()}
          <Sidebar />
          <Main />
        </main>
    </>
    );
  }
}