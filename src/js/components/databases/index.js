import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDatabaseAction, removeDatabaseAction } from '../../actions';

class DababaseItem extends Component {
  render() {
    return (
      <tr>
        <td><input type="checkbox"/></td>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>2</td>
        <td>
          <button className="small" onClick={this.props.makeCopy}>Copy</button> &nbsp;
          <button className="small" onClick={this.props.makeDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}


class Databases extends Component {
  handleDelete(name) {
    const confirm = window.confirm('Are you sure?');
    let { list } = this.props.database;
    list = list.filter(item => (item !== name));

    if (confirm)
      this.props.removeDatabase({ list });
  }

  handleCopy(name) {}

  render() {
    const { list } = this.props.database;

    return (
      <table className="table table-sm table-phpmyadmin small">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" title="Select all"/></th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Version</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((name, key) => {
              return (
                <DababaseItem
                  key={key}
                  id={key}
                  name={name}
                  makeCopy={ this.handleCopy.bind(this, name) }
                  makeDelete={ this.handleDelete.bind(this, name) }
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
    );
  }
}


const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  addDatabase: payload => dispatch(addDatabaseAction(payload)),
  removeDatabase: payload => dispatch(removeDatabaseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Databases);


