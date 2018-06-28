import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

class ClassComponent extends Component {
  render() {
    let counter = toJS(this.props.counter);
    return (
      <div>
        <label className="red-label">Class Component: {counter.count}</label>
      </div>
    )
  }
}

export default inject('counter')(observer(ClassComponent));
