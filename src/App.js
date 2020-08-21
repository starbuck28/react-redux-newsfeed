import React, { useEffect } from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';
import PostForm from './features/posts/PostForm';
import { updatePosts } from './features/posts/postsSlice'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/api/posts')
    .then(response => response.json())
    .then(data => dispatch(updatePosts({posts: data})))
  }, [dispatch])

  const posts = useSelector(state => state.posts)

  return (
    <div className="App">
      <header className="App-header">
        <PostForm/>
        <PostsList posts={posts}/>
      </header>
    </div>
  );
}

export default App;
