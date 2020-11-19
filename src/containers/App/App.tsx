import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import Footer from '../Footer';
import Content from '../Content';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.scss';

function App() {
  const { t, i18n } = useTranslation();
  // i18n.changeLanguage('ie');

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
