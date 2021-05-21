import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './papers/android/App'

const reducer=(state={},action)=>state
const store=createStore(reducer,applyMiddleware(thunk))
export default function Main() {
  return (
      <Provider>
        <App />
      </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);