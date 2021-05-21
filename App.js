import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import App from './src/App';
// import store from './store';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store=createStore(()=>({a:[]}),applyMiddleware(thunk))
export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}