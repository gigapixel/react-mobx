import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';

import UnitStore from './stores/UnitStore';
import CounterStore from './stores/CounterStore';

import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const stores = {
  unit: UnitStore,
  counter: CounterStore,
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
            <div>
              <strong>Menu:</strong><br />
              <Link to="/counter">Counter</Link>
              <br />
              <Link to="/class">Class Component</Link>
              <br />
              <Link to="/functional">Functional Component</Link>

              <hr />
              <Route path="/counter" component={Counter} />
              <Route path="/class" component={ClassComponent} />
              <Route path="/functional" component={FunctionalComponent} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
