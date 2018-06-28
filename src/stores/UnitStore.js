import { extendObservable } from 'mobx';

export class UnitStore {
  constructor() {
    extendObservable(this, {
      unit: 'pcs',
    })
  }

  changeUnit(unit) {
    this.unit = unit;
  }
}

export default new UnitStore();