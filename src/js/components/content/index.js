import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsAction } from '../../actions';

class Content extends Component {
  handleFetch(data) {
    console.log('Fetch: ', data);
  }

  handleClick() {
    this.props.fetchItems(200, data => this.handleFetch(data));
  }

  render() {
    return (
      <span onClick={ this.handleClick.bind(this) }>Content here! { Date.now() }</span>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  fetchItems: (item, callback) => dispatch(fetchItemsAction(item, callback)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Content);
