import { Component } from 'inferno';
import { connect } from 'inferno-redux';


class Expander extends Component {
  render() {
    const state = this.context.store.getState();
    const { names } = state.databases;


    return (
      <div className="c-expander">
        <ul className="c-expander__list">
          {
            names.map(name => {
              return <li><span>{name}</span></li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({  });

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
