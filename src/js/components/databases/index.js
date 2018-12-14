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
    const name = input.value;
    const { list } = this.props.database;

    if (!list.includes(name)) {
      this.props.addDatabase( name );
      input.value = '';
    }
  }

  handleDelete(name) {
    this.props.removeDatabase(name);
  }

  render() {
    const { list } = this.props.database;

    return (
      <div className="m-5">
        <div className="container">
          <h2 className="h5">Databases salved:</h2>
          <ul>
            {
              list.map((name, key) => {
                return <DababaseItem key={key} name={name} click={ this.handleDelete.bind(this, name) } />;
              })
            }
          </ul>
        </div>

        <div className="container">
          <h2 className="h5">Add databases:</h2>
          <form action="." onSubmit={ this.handleSubmit.bind(this) } >
            <fieldset>
              <input minLength="1" type="text" name="database_name" required/>
              <button>Add</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  addDatabase: name => dispatch(addDatabaseAction(name)),
  removeDatabase: name => dispatch(removeDatabaseAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Databases);
