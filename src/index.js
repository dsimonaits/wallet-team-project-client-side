import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { store } from './redux/store';
import { persistor } from './redux/store';
import './stylesheet/index.css';
import './stylesheet/vars.css';
import './stylesheet/fonts.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter basename="wallet-team-project-client-side">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
