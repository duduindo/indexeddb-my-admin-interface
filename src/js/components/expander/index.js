import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showDatabaseAction, fetchStoresAction } from '../../actions';


class Expander extends Component {
  handleClick(name, version) {
    this.props.fetchStores(name, version);
  }

  render() {
    const { list } = this.props.database;

    return (
      <div className='c-expander'>
        <ul className='c-expander__list'>
          {
            list.map((database, key) => {
              return (
                <li key={key}>
                  <Link
                    to={{ pathname: '/stores' }}
                    onClick={ this.handleClick.bind(this, database.name, database.version) }
                    replace
                  >
                    {database.name}
                  </Link>
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  showDatabase: (name, version) => dispatch(showDatabaseAction(name, version)),
  fetchStores: (name, version) => dispatch(fetchStoresAction(name, version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
