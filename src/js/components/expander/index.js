import { Component } from 'inferno';
import { connect } from 'inferno-redux';

class Expander extends Component {
  handleClick(type) {
    if (type === 'databases')
      this.props.showDatabases();

    if (type === 'stores')
      this.props.showStores();

    if (type === 'indexes')
      this.props.showIndexes();
  }

  render() {
    return (
      <div className="c-expander">
        <button onClick={ this.handleClick.bind(this, 'databases') }>Show Databases</button> <br/>
        <button onClick={ this.handleClick.bind(this, 'stores') }>Show Stores</button> <br/>
        <button onClick={ this.handleClick.bind(this, 'indexes') }>Show Indexes</button> <br/>
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
    showDatabases: () =>
      dispatch({
        type: 'SHOW_DATABASES',
        name: 'Show me the databases!'
      }),

    showStores: () =>
      dispatch({
        type: 'SHOW_STORES',
        name: 'Show me the stores!'
      }),

    showIndexes: () =>
      dispatch({
        type: 'SHOW_INDEXES',
        name: 'Show me the indexes!'
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
