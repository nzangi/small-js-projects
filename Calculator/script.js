class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.opearation = undefined;

    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOpearation(opearation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.opearation = opearation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute() {
        let computation;
        const previousNumber = parseFloat(this.previousOperand);
        const currentNumber = parseFloat(this.currentOperand);
        if (isNaN(previousNumber) || isNaN(currentNumber)) return;

        switch (this.opearation) {
            case '+':
                computation = previousNumber + currentNumber;
                break;
            case '-':
                computation = previousNumber - currentNumber;
                break;
            case '/':
                computation = previousNumber /  currentNumber;
                break;
            case '*':
                computation = previousNumber * currentNumber;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.opearation = undefined;
        this.previousOperand = '';

    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const intergerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let intergerDisplay;
        if(isNaN(intergerDigits)){
            intergerDisplay = '';
        }else{
            intergerDisplay = intergerDigits.toLocaleString('en',{maximumFractionDigits:0});
        }

        if(decimalDigits != null){
            return `${intergerDisplay}.${decimalDigits}`;
        }else{
            return intergerDisplay;
        }
        
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.opearation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.opearation}`;
        }else{
            this.previousOperandTextElement.innerText ='';
        }

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opearation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOpearation(button.innerText);
        calculator.updateDisplay();

    })
})

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})












