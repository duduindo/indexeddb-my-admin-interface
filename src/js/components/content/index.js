import { Component } from 'inferno';
import { connect } from 'inferno-redux';

class Content extends Component {
  componentWillUpdate(nextProps, nextState, context) {
    console.warn(nextProps);
  }

  render() {
    const store = this.context.store;
    const state = store.getState();

    return (
      <span>{ state.name }</span>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}


export default connect(mapStateToProps)(Content);
