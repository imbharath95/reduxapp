import React, { Component } from 'react';
import PostsList from './components/PostList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux API Example</h1>
        <PostsList />
      </div>
    );
  }
}

export default App;
