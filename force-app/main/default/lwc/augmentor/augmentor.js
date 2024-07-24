import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
        //alert('this is argumentor cmp to set counter in numerator cmp');
      this.startCounter = parseInt(event.target.value);
    }
    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
      }
}