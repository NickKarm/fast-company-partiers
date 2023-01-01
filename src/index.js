import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './component/user';
import 'bootstrap/dist/css/bootstrap.css';

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);

//reportWebVitals();