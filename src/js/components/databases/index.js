import { Component } from 'inferno';
import { connect } from 'inferno-redux';
import { addDatabaseAction } from '../../actions';


class Databases extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const input = e.target['database_name'];
    // const databases = [...this.state.databases];

    // databases.push(input.value);

    // this.setState({ databases });
    // this.props.addDatabase(input.value);
    this.props.addDatabase({ name: 'Teste', number: 100 });
  }

  render() {
    const store = this.context.store;
    const state = store.getState();

    console.log('statee redux: ', state);

    return (
      <div className="m-5">
        <div className="container">
          <h2 className="h5">Databases salved:</h2>
          <ul></ul>
        </div>

        <div className="container">
          <h2 className="h5">Add databases:</h2>
          <form action="." onSubmit={ this.handleSubmit.bind(this) } >
            <fieldset>
              <input type="text" name="database_name" />
              <button>Add</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  addDatabase: payload => dispatch(addDatabaseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Databases);
