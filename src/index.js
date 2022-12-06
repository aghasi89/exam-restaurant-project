import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MenuReducer from './Store/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Store';
import { LanguageContext } from './Contexts';
import { useState } from 'react';
import Languages from './Contexts/Languages';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <LanguageContext.Provider value ={ Languages }>
      <Provider store = {store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
    </LanguageContext.Provider>
       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
