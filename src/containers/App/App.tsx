import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import Footer from '../Footer';
import Content from '../Content';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar className="sidebar" />
        <TopBar />
        <PerfectScrollbar>
          <Content className="content"/>
          <Footer />
        </PerfectScrollbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
