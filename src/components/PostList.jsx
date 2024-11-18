// src/PostsList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';

class PostsList extends Component {
  componentDidMount() {
    const { status, fetchPosts } = this.props;
    if (status === 'idle') {
      fetchPosts();
    }
  }

  render() {
    const { posts, status, error } = this.props;

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    if (status === 'failed') {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  status: state.posts.status,
  error: state.posts.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
