class Calculator {
    constructor(previousOperantTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperantTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
       }

clear ()  {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
  }

       delete ()
    {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toSting() + number.toString()
    }
    chooseOperation(operation){

    }

    compute ()   //take values and compute into a single value
    {

    }

upateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    }

}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)  //create object

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
            })

})