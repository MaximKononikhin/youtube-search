import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import api from './api/api';
import App from './App';
import { reducer } from './Store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);