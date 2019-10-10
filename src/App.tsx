import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import Tweet from './components/Tweet';
import { init } from './store';

const store = init();

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          <Tweet />
        </div>
      </Provider>
    );
  }
}

export default App;
