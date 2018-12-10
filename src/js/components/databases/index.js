import { Component } from 'inferno';
import { connect } from 'inferno-redux';

class Databases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      databases: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target['database_name'];
    const databases = [...this.state.databases];

    databases.push(input.value);

    this.setState({ databases });
    this.props.addDatabase(input.value);
  }

  render() {
    return (
      <div className="m-5">
        <div className="container">
          <h2 className="h5">Databases salved:</h2>
          <ul>
            {
              this.state.databases.map(database => {
                return <li><button>X</button> <button>{database}</button></li>;
              })
            }
          </ul>
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

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDatabase: name =>
      dispatch({
        type: 'ADD_DATABASE',
        name
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Databases);
