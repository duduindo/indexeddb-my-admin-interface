import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { } from '../../actions';

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
  render() {
    const { list, selected } = this.props.database;

    console.log(selected);

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
              list.map((database, key) => {
                return (
                  <StoreItem
                    key={key}
                    id={key}
                    name={database.name}
                    version={database.version}
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stores);


