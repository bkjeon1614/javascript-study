import * as React from 'react';
import './App.css';

import CounterContainer from 'containers/CounterContainer';
import Profile from './components/Profile';
import TodoListContainer from 'containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile
          name="bkjeon"
          job="developer" 
        />
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;