import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showDatabaseAction, fetchDatabaseTreeAction } from '../../actions';


class Expander extends Component {
  handleClick(name, version) {
    this.props.fetchStores(name, version);
  }

  componentDidMount() {
    this.props.fetchTree('gih-reservations', 2, 'reservations');
  }

  render() {
    const { tree } = this.props.database;

    return (
      <div className='c-expander'>
        <ul className='c-expander__list'>
          {
            tree.map((database, indexDatabase) => {
              return (
                <li key={indexDatabase}>
                  <button>+</button> {database.name}

                  <ul>
                    {
                      database.stores.map((store, indexStore) => {
                        return (
                          <li key={indexStore}>
                            <button>+</button> {store.name}

                            <ul>
                              {
                                store.indexes.map((index, i) => {
                                  return (
                                    <li key={i}>
                                      <button>+</button> {index}
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </li>
                        );
                      })
                    }
                  </ul>
                </li>
              );
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
  fetchTree: (name, version, store) => dispatch(fetchDatabaseTreeAction(name, version, store)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
