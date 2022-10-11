// calculate function

// clear display function

// update display function

// add numbers to screen function

// operator chose function

const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const clearButton = document.querySelector('[data-clear]');
const currentTextElement = document.querySelector('.current-entry');
const previousTextElement = document.querySelector('.previous-entry');


class Calculator {
    
    constructor(currentTextElement, previousTextElement) {
        this.currentTextElement = currentTextElement;
        this.previousTextElement = previousTextElement;
        this.clear();
    }

    clear() {
        this.currentText = '';
        this.previousText = '';
        this.operation = undefined;
    }

    appendNumber (number) {
        this.currentText = number;
    }

    updateDisplay() {
        this.currentTextElement.innerText = this.currentText;
    }

}


const calculator = new Calculator(currentTextElement, previousTextElement);


numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})