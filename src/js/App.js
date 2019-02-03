import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Content from './components/content';
import Databases from './components/databases';
import Expander from './components/expander';
import Filter from './components/filter';
import Header from './components/header';
import StatusResults from './components/statusResults';
import StoreList from './components/storeList';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="l-container">
          <aside className="l-aside">
            <h3>logo</h3>
            <Expander />
          </aside>

          <header className="l-masthead">
            <Route component={Header} />
            <Route path="/content" component={Filter} />
            <Route path="/content" component={StatusResults} />
          </header>

          <main className="l-main">
            <Route exact path="/databases" component={Databases} />
            <Route exact path="/store-list/:database/:version/:store" component={StoreList} />
            <Route path="/content" component={Content} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;

