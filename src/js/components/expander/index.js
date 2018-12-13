import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showDatabaseAction } from '../../actions';


class Expander extends Component {
  handleClick(nameDatabase) {
    this.props.showDatabase({ selected: nameDatabase });
  }

  render() {
    const { list } = this.props.database;

    return (
      <div className='c-expander'>
        <ul className='c-expander__list'>
          {
            list.map((name, key) => {
              return (
                <li key={key}>
                  <HashRouter>
                    <Link to={{ pathname: '/content' }} onClick={ this.handleClick.bind(this, name) } replace>{name}</Link>
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
