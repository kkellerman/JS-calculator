class Calculator {
    constructor(previousOperantTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperantTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
       }

       clear ()
       {
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
  }

       delete ()
    {

    }

    appendNumber(number) {

    }
    chooseOperation(operation){

    }

    compute ()
    {

    }

upateDisplay() {

}

}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)