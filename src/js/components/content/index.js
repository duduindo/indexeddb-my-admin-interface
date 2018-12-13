import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    console.log(this.props);

    return (
      <span>Content here! { Date.now() }</span>
    );
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
