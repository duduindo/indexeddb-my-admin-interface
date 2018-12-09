import { render, Component } from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import Expander from './components/expander';
import Content from './components/content';


const store = createStore(function(state, action) {
  switch (action.type) {
    case 'SHOW_DATABASES':
      return {
        name: action.name
      };

    case 'SHOW_STORES':
      return {
        name: action.name
      };

    case 'SHOW_INDEXES':
      return {
        name: action.name
      };

    default:
      return {
        name: 'TOM'
      };
  }
})


render((
  <Provider store={ store }>
    <div className="l-container">
      <header className="l-masthead">header</header>

      <aside className="l-aside">
        <Expander />
      </aside>

      <main className="l-main">
        <Content />
      </main>
    </div>
  </Provider>
), document.getElementById('root'));
