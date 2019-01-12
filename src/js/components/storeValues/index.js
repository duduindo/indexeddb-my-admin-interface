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
          {this.props.valueKey}
        </td>
        <td>
          {this.props.value}
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
    const { values = {keyPath: '', keys: [], values: []} } = this.props.stores;

    return (
      <div>
        <table className="table table-sm table-phpmyadmin small">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Key <small><i>(Key path: "{values.keyPath}")</i></small></th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {
              values.keys.map((item, key) => {
                const value = JSON.stringify(values.values[key]);

                return (
                  <StoreItem
                    key={key}
                    id={key}
                    valueKey={item}
                    value={value}
                  />
                );
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td colSpan="4"><strong>Total: { values.keys.length }</strong></td>
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


