import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track displayValue = '';

    addToDisplay(event) {
        const value = event.target.dataset.value;
        this.displayValue += value;
    }

    clearDisplay() {
        this.displayValue = '';
    }

    calculate() {
        try {
            this.displayValue = eval(this.displayValue);
        } catch (error) {
            this.displayValue = 'Error';
        }
    }
}
