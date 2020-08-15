import React from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';
import PostForm from './features/posts/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm/>
        <PostsList/>
      </header>
    </div>
  );
}

export default App;
