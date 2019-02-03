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
    this.props.fetchTree('database1', 2, 'reservations');
  }

  handleExpanse(e) {
    const button = e.target;
    const list = button.parentElement.querySelector('ul');
    const isHidden = list.classList.contains('d-none');

    button.textContent = (isHidden) ? '-' : '+';
    list.classList.toggle('d-none');
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
                  <button onClick={ e => this.handleExpanse(e) } className={ (database.stores.length) ? '' : 'd-none' }>+</button> &nbsp;
                  {database.name}

                  <ul className="d-none">
                    {
                      database.stores.map((store, indexStore) => {
                        return (
                          <li key={indexStore}>
                            <button onClick={ e => this.handleExpanse(e) } className={ (store.indexes.length) ? '' : 'd-none' }>+</button> &nbsp;
                            <Link to={{ pathname: `/store-list/${database.name}/${database.version}/${store.name}/` }} replace>
                              {store.name}
                            </Link>

                            <ul className="d-none">
                              {
                                store.indexes.map((index, i) => {
                                  return (
                                    <li key={i}>
                                      <a href="#">{index}</a>
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
