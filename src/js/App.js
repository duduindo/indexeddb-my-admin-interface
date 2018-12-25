import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Expander from './components/expander';
import AppContext from './AppContext';

const defaultValue = {
  database: {
    list: [
      { name: 'database1', version: 2 },
      { name: 'database2', version: 2 },
      { name: 'database3', version: 2 },
      { name: 'database4', version: 2 },
      { name: 'database_teste', version: 2 },
      { name: 'database_teste', version: 2 },
      { name: 'database_teste', version: 3 },
    ],
    selected: {
      name: 'database1',
      version: 2,
    },
  }
};


function addDatabase(name, version) {
  const data = {name, version};
  const list = [...this.state.database.list, data];

  this.setState({
    database: {list}
  });
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {...defaultValue};
    this.actions = {
      addDatabase: addDatabase.bind(this)
    };
  }

  render() {
    return (
      <HashRouter>
        <AppContext.Provider value={{store: this.state, actions: this.actions}}>
          <div className="l-container">
            <aside className="l-aside">
              <h3>logo</h3>
              <Expander />
            </aside>

            <header className="l-masthead">
              header
            </header>

            <main className="l-main">
              main
            </main>
          </div>
        </AppContext.Provider>
      </HashRouter>
    );
  }
}

export default App;

