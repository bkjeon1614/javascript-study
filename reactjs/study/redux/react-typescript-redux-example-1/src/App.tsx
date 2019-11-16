import * as React from 'react';
import './App.css';

import Counter from './components/Counter';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile
          name="bkjeon"
          job="developer" 
        />
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
