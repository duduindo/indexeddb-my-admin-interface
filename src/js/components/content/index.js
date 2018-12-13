import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    return (
      <span>Content here! { Date.now() }</span>
    );
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
