import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  componentWillUpdate(nextProps, nextState, context) {
    console.warn(nextProps);
  }

  render() {
    return (
      <span>Content here!</span>
    );
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
