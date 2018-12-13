import React, { Component } from 'react';
import { connect } from 'react-redux';


class Expander extends Component {
  render() {
    const { names } = this.props.databases;

    return (
      <div className="c-expander">
        <ul className="c-expander__list">
          {
            names.map((name, key) => {
              return <li key={key}><span>{name}</span></li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
