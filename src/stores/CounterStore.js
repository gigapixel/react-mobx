import { extendObservable } from 'mobx';

class CounterStore {
  constructor() {
    extendObservable(this, {
      count: 0,
    })
  }

  addCounter() {
    this.count++;
  }

  subtractCounter() {
    this.count--;
  }
}

export default new CounterStore();