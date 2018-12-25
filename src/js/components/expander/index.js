import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
//import DatabaseContext from '../../contexts/databaseContext';


class Expander extends Component {
  static contextType = AppContext;

  render() {
    //const list = [{name: 'database 1', version: 2}];
    const { list } = this.context.store.database;
    const { addDatabase } = this.context.actions;

    return (
      <div className='c-expander'>
        <ul className='c-expander__list'>
          {
            list.map((database, key) => {
              return (
                <li key={key}>
                  <Link
                    to={{ pathname: '/content' }}
                    onClick={ addDatabase.bind(this, 'ola!', 500) }
                    replace
                  >
                    {database.name}
                  </Link>
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
}


export default Expander;
