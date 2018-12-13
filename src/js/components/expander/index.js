import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showDatabaseAction } from '../../actions';


class Expander extends Component {
  render() {
    const { names } = this.props.databases;

    return (
      <div className='c-expander'>
        <ul className='c-expander__list'>
          {
            names.map((name, key) => {
              return (
                <li key={key}>
                  <HashRouter>
                    <Link to={{ pathname: '/content', search: `?database=database${key}` }} replace>{name}</Link>
                  </HashRouter>
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  showDatabase: payload => dispatch(showDatabaseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
