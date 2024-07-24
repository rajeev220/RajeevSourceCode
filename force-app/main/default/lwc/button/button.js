import { LightningElement,api } from 'lwc';
export default class Button extends LightningElement {
    @api label;
    @api icon;
    handleButton(event) {
        //alert('this is button cmp');
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
      }));
    }
}