import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDatabaseAction, removeDatabaseAction } from '../../actions';

class DababaseItem extends Component {
  render() {
    return (
      <li>
        <button onClick={this.props.click}>X</button>&nbsp;<span>{this.props.name}</span>
      </li>
    );
  }
}


class Databases extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const input = e.target['database_name'];
    const { list } = this.props.database;
    const joinNames = [...list, input.value];

    if (!list.includes(input.value)) {
      this.props.addDatabase({ list: joinNames });
      input.value = '';
    }
  }

  handleDelete(name) {
    let { list } = this.props.database;
    list = list.filter(item => (item !== name));

    this.props.removeDatabase({ list });
  }

  render() {
    //const { list } = this.props.database;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  addDatabase: payload => dispatch(addDatabaseAction(payload)),
  removeDatabase: payload => dispatch(removeDatabaseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Databases);
