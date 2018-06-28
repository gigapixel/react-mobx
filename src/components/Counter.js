import React, { Component } from 'react';

import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

class Counter extends Component {
  addCounter() {
    this.props.counter.addCounter();
  }

  subtractCounter() {
    this.props.counter.subtractCounter();
  }

  changeUnit(event) {
    this.props.unit.changeUnit(event.target.value);
  }

  render() {
    let unit = toJS(this.props.unit);
    let counter = toJS(this.props.counter);

    return (
      <div>
        <label className="red-label">Count: {counter.count} {unit.unit}</label>
        <br />
        <button onClick={this.addCounter.bind(this)}>+</button>
        <button onClick={this.subtractCounter.bind(this)}>-</button>
        <input value={unit.unit} onChange={this.changeUnit.bind(this)} />
      </div>
    )
  }
}

export default inject('counter', 'unit')(observer(Counter));
