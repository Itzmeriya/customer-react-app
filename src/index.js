import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import StateData from './components/setdata';
//import Game from './components/mygame';
//import Cloackapp from './components/lifecyclemethod/lifecycle';
//import Calculator from './components/tempcalmethod/tempcalculator';
//import Car from './components/demo_usestate';
//import Counter from './components/demo_useeffect';
//import Component1 from './components/demo_context';
//import Appuseref from './components/demo_useref';
//import Todos from './components/demo_useReducer';
//import DynamicTable from './components/studenttable';
//import App from './components/stdnttable/app'
//import StudentData from './components/studenttable/table'
//import App from './components/Callback/Todo-index';
 //import ToolbarApp from './components/Customhook';
//import UseMemoApp from './components/useMemohook';
import App from './components/Sortfilterpagination/App'
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
