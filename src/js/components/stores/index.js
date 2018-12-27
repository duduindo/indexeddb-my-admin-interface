import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStoresAction } from '../../actions';

class StoreItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}


class Stores extends Component {
  componentDidMount() {
    const { selected } = this.props.database;

    this.props.fetchStores(selected.name, selected.version);
  }

  render() {
    const { list } = this.props.stores;

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
                    name={store.name}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Stores);


