import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const secondRoot=ReactDOM.createRoot(
  document.getElementById('second-root') as HTMLElement
)

secondRoot.render(
  <div style={{
    borderWidth:'thin',
    borderStyle:'solid',
    borderColor:'var(--textColor)',
    padding:'10px',
    margin:'10px'
  }}>
  <h1>This is from second Root.</h1>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
