import { render, Component } from 'inferno';
import { HashRouter, Route } from 'inferno-router';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import configureStore from './store';
import Expander from './components/expander';
import Content from './components/content';
import Databases from './components/databases';

render((
  <Provider store={ configureStore() }>
    <div className="l-container">
      <header className="l-masthead">header</header>

      <aside className="l-aside">
        <Expander />
      </aside>

      <main className="l-main">
        <HashRouter>
          <Route exact path="/" component={Databases} />
          <Route exact path="/stores" component={Content} />
          <Route exact path="/indexes" component={Content} />
        </HashRouter>
      </main>
    </div>
  </Provider>
), document.getElementById('root'));
