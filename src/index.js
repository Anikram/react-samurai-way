import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContext from "./StoreContext";

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App />
        {/*store={store} dispatch={store.dispatch.bind(store)}*/}
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
