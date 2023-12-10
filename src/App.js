// App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state
  };
};

export default connect(mapStateToProps, { increment, decrement })(App);
