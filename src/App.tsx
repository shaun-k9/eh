import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mySaga from './sagas';
import './App.css';
import EventHub from './containers/eventHub/container';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      reducer,
      applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(mySaga);
    

    return (
      <div className="App">
        <Provider store={store}>
          <EventHub/>
        </Provider>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Shaun</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
