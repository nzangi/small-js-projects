class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    }
    clear(){
        this.currentOperand ='';
        this.previousOperand = '';
        this.opearation = undefined;

    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOpearation(opearation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opearation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement= document.querySelector('[data-previous-operand]');
const currentOperandTextElement= document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();

    })
})












