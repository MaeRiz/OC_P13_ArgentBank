import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/AppRoutes"
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
