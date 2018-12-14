import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsAction } from '../../actions';

class Content extends Component {
  handleFetch(data) {
    console.log('Fetch: ', data);
  }

  handleClick() {
    this.props.fetchItems(200);
  }

  render() {
    console.log(this.props);


    return (
      <span onClick={ this.handleClick.bind(this) }>Content here! { Date.now() }</span>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  fetchItems: item => dispatch(fetchItemsAction(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Content);
