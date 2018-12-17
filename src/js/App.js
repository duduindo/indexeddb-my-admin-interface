import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Databases from './components/databases';
import Expander from './components/expander';
import Content from './components/content';
import Header from './components/header';
import Filter from './components/filter';

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
            <Header />
            <Filter />
          </header>

          <main className="l-main">
            <Route exact path="/" component={Databases} />
            <Route path="/content" component={Content} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;

