const numberButton = document.querySelectorAll('[data-number]')
const operationsButton = document.querySelectorAll('[data-operation]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')
const equal = document.querySelector('[data-equal]')
const del = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')


 console.log(previousOperandText)

class Calculator {
    constructor(previousOperandText,currentOperandText){
        this.previousOperandText=previousOperandText
        this.currentOperandText=currentOperandText
    }
    clear(){
        this.previousOperandText.innerText=''
        this.currentOperandText.innerText=''
    }

    appendNumber(number){
        if(number==='.' && currentOperandText.innerText.includes('.')) return
        if(this.currentOperand!==''){
             this.currentOperandText.innerText = this.currentOperandText.innerText.toString() + number.toString()
        }else{
            currentOperandText.innerHTML = number
        }
    }
     appendOperation(operation){
         if(currentOperandText.innerText==='') return
        this.previousOperandText.innerText=`${this.currentOperandText.innerText}  ${operation}`
        this.currentOperandText.innerText=""
        this.operation=operation
     }

    compute(){
        if(previousOperandText.innerHTML==='') return
        switch(this.operation){
            case '+':
                currentOperandText.innerText = parseFloat(previousOperandText.innerText.split(' ')[0]) + parseFloat(currentOperandText.innerText); break
                case '-':
                 currentOperandText.innerText = parseFloat(previousOperandText.innerText.split(' ')[0]) - parseFloat(currentOperandText.innerText); break
                 case '/':
                    currentOperandText.innerText = parseFloat(previousOperandText.innerText.split(' ')[0]) + parseFloat(currentOperandText.innerText); break
                    case '*':
                        currentOperandText.innerText = parseFloat(previousOperandText.innerText.split(' ')[0]) * parseFloat(currentOperandText.innerText); break
        }
        previousOperandText.innerText = ''
    }

    delete(){
        currentOperandText.innerText =  currentOperandText.innerText.toString().slice(0,-1)
    }
}

const calculator = new Calculator(previousOperandText,currentOperandText)

numberButton.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        calculator.appendNumber(buttons.innerText)
    })
})

operationsButton.forEach((b)=>{
  b.addEventListener('click',()=>{
    calculator.appendOperation(b.innerText)
  })
})

allClear.addEventListener('click',()=>{
    calculator.clear()
})

equal.addEventListener('click',()=>{
    calculator.compute()
})

del.addEventListener('click',()=>{
    calculator.delete()
})