import React from 'react';
import ReactDOM from 'react-dom';
import App from './../src/containers/app/index';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers/index';

// const store = createStore(
//   rootReducer ,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
