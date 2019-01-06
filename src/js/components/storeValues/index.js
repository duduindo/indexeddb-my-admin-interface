import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStoresAction, fetchStoresValuesAction } from '../../actions';

class StoreItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>
          <Link
            to={{ pathname: '/store-values' }}
            onClick={ this.props.handleClick }
            replace
          >
            {this.props.storeName}
          </Link>
        </td>
      </tr>
    );
  }
}


class StoreValues extends Component {
  componentDidMount() {
    const { selected } = this.props.database;

    this.props.fetchStores(selected.name, selected.version);
  }

  handleClick(storeName) {
    const { selected } = this.props.database;

    this.props.fetchStoresValues(selected.name, selected.version, storeName);
  }

  render() {
    const { list, values } = this.props.stores;

    console.log('List: ', list);
    console.log('Values: ', values);

    return (
      <div>
        <table className="table table-sm table-phpmyadmin small">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((store, key) => {
                return (
                  <StoreItem
                    key={key}
                    id={key}
                    storeName={store.name}
                    handleClick={ this.handleClick.bind(this, store.name) }
                  />
                );
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td colSpan="4"><strong>Total: { list.length }</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  fetchStores: (name, version) => dispatch(fetchStoresAction(name, version)),
  fetchStoresValues: (name, version, storeName) => dispatch(fetchStoresValuesAction(name, version, storeName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreValues);


