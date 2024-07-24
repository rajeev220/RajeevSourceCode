import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {
  //@api counter = 0;
  _currentCount = 0;
  priorCount = 0;
  @api
  get counter() {
    return this._currentCount;
  }
  set counter(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handleMultiply(event) {
      //alert('this is numerator cmp');
      const factor = event.detail;
      this.counter = this.counter * factor;
    }
    handleMul(event) {
        const factor = event.detail;
        this.counter *= factor;
      }

      @api 
      maximizeCounter() {
        this.counter += 1000000;
      }

}