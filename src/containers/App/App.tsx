import React from 'react';
import {
  BrowserRouter,

} from 'react-router-dom';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import Footer from '../Footer';
import Content from '../Content';

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar className="sidebar" />
        <TopBar />
        <div>
          <Content className="content"/>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
