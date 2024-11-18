// src/components/MyComponent.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../features/exampleSlice';

class MyComponent extends Component {
  componentDidMount() {
    // Dispatch the fetchData action when the component mounts
    this.props.fetchData();
  }

  render() {
    const { data, loading, error } = this.props;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>Data from API</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.example.data,
  loading: state.example.loading,
  error: state.example.error,
});

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
