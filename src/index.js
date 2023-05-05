import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import GeneralContextProvider from './contexts/GeneralContext';

import Main from './components/common/Main';
import TicketPlanForm from './components/parking/TicketPlanForm';
import LoginForm from './components/common/LoginForm';

import Header from './components/common/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/ticket",
    element: <TicketPlanForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <Header>
        <RouterProvider router={router} />
      </Header>
    </GeneralContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
