import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Databases from './components/databases';
import Expander from './components/expander';
import Content from './components/content';


class App extends Component {
  render() {
    return (
      <div className="l-container">
        <header className="l-masthead">header</header>

        <aside className="l-aside">
          <h3>logo</h3>
          <Expander />
        </aside>

        <main className="l-main">
          <HashRouter>
            <div>
              <Route exact path="/" component={Databases} />
              <Route path="/content" component={Content} />
            </div>
          </HashRouter>
        </main>
      </div>
    );
  }
}

export default App;
