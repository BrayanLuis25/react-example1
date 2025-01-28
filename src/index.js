import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
import Fecha from './Fecha';
import Formulario from './Formulario';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
<div className='marco'>
  
  <Header/>
  <Fecha/>
  <Formulario/>
  

</div>,
document.getElementById("root"),



);




reportWebVitals();

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/ 