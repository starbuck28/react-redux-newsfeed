import React from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostsList/>
      </header>
    </div>
  );
}

export default App;
