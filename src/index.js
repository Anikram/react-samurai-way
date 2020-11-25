import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  {id: 1, name: 'Alexa'},
  {id: 2, name: 'Balexa'},
  {id: 3, name: 'Calexa'},
  {id: 4, name: 'Dalexa'},
  {id: 5, name: 'Ealexa'},
];

let messages = [
  {id: 1, text: 'Who are you?'},
  {id: 2, text: 'What are you?'},
  {id: 3, text: 'Why are you?'},
  {id: 4, text: 'When are you?'},
  {id: 5, text: 'How are you?'},
];

let newsPosts = [
  {id:1, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'},
  {id:2, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'},
  {id:3, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'},
  {id:4, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'},
  {id:5, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'},
];

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} newsPosts={newsPosts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
