import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDatabaseAction, removeDatabaseAction } from '../../actions';

class StoreItem extends Component {
  render() {
    return (
      <tr>
        <td><input type="checkbox"/></td>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>{this.props.version}</td>
        <td>
          <button className="small" onClick={this.props.makeCopy}>Copy</button> &nbsp;
          <button className="small" onClick={this.props.makeDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}


class Stores extends Component {
  handleDelete(name, version) {
    const confirm = window.confirm('Are you sure?');

    if (confirm)
      this.props.removeDatabase(name, version);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { list } = this.props.database;
    const name = e.target['database_name'];
    const version = e.target['database_version'];

    this.props.addDatabase(name.value, version.valueAsNumber);
    name.value = '';
    version.value = '';
  }

  handleCopy(name) {}

  render() {
    const { list, selected } = this.props.database;

    console.log(selected);

    return (
      <div>
        <div className="mb-4">
          <h2 className="h6">Add database:</h2>
          <form action="." onSubmit={ this.handleSubmit.bind(this) } >
            <fieldset>
              <input className="small" placeholder="Name" minLength="1" type="text" name="database_name" required/> &nbsp;
              <input className="small" placeholder="Version" minLength="1" min="1" type="number" name="database_version" required/> &nbsp;
              <button className="small">Add</button>
            </fieldset>
          </form>
        </div>

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
              list.map((database, key) => {
                return (
                  <StoreItem
                    key={key}
                    id={key}
                    name={database.name}
                    version={database.version}
                    makeCopy={ this.handleCopy.bind(this, database.name, database.version) }
                    makeDelete={ this.handleDelete.bind(this, database.name, database.version) }
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
  addDatabase: (name, version) => dispatch(addDatabaseAction(name, version)),
  removeDatabase: (name, version) => dispatch(removeDatabaseAction(name, version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stores);


