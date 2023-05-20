import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './styles/common/Button.css';
import './styles/common/Form.css';

import Header from './components/common/Header';
import GeneralContextProvider from './contexts/GeneralContext';

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <Header>
        <main className="bg-gray-100 h-screen">
          <RouterProvider router={router} />
        </main>
      </Header>
    </GeneralContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
