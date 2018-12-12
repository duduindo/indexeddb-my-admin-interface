import { Component } from 'inferno';
import { connect } from 'inferno-redux';
import { addDatabaseAction, deleteDatabaseAction } from '../../actions';


class Databases extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd(e) {
    e.preventDefault();
    const input = e.target['database_name'];
    const { names } = this.props.databases;
    const joinNames = [...names, input.value];

    if (!names.includes(input.value)) {
      this.props.addDatabase({ names: joinNames });
      input.value = '';
    }
  }

  handleDelete(name) {
    let { names } = this.props.databases;
    names = names.filter(item => (item !== name));

    this.props.deleteDatabase({ names });
  }

  render() {
    const state = this.context.store.getState();
    const { names } = state.databases;

    return (
      <div className="m-5">
        <div className="container">
          <h2 className="h5">Databases salved:</h2>
          <ul>
            {
              names.map(name => {
                return <li><button onClick={ this.handleDelete.bind(this, name) }>X</button> <span>{name}</span></li>;
              })
            }
          </ul>
        </div>

        <div className="container">
          <h2 className="h5">Add databases:</h2>
          <form action="." onSubmit={ this.handleAdd.bind(this) } >
            <fieldset>
              <input minlength="1" type="text" name="database_name" required/>
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
  addDatabase: payload => dispatch(addDatabaseAction(payload)),
  deleteDatabase: payload => dispatch(deleteDatabaseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Databases);
