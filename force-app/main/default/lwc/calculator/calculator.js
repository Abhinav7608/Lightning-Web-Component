import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track result;
    @track showResult = false;

    handleFirstNumberChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }

    handleSecondNumberChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }

    handleClick(event) {
        const operation = event.target.label;
        if (operation === 'Add') {
            this.result = this.firstNumber + this.secondNumber;
        } else if (operation === 'Subtract') {
            this.result = this.firstNumber - this.secondNumber;
        } else if (operation === 'Multiply') {
            this.result = this.firstNumber * this.secondNumber;
        }
        this.showResult = true;
    }
    handleRefresh() {
        this.template.querySelector('form').reset();
        this.result = '';
        this.showResult = false;
    }
}
