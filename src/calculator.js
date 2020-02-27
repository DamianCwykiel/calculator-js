'use strict'

export class Calculator {
    constructor(previousDisplayStatusTextElement, currentDisplayStatusTextElement) {
        this.previousDisplayStatusTextElement = previousDisplayStatusTextElement
        this.currentDisplayStatusTextElement = currentDisplayStatusTextElement
        this.clear()
    }
    //change the value
    changeValue() {
        if (this.currentDisplayStatus < 0) {
            this.currentDisplayStatus = this.currentDisplayStatus * (-1)
        } else if (isNaN(this.currentDisplayStatus)) {
            this.currentDisplayStatus = 0
        } else {
            this.currentDisplayStatus = - this.currentDisplayStatus
        }
    }
    //C button
    clear() {
        this.currentDisplayStatus = ''
        this.previousDisplayStatus = ''
        this.counting = undefined
      }
    //update the display after click any button
    addNumber(number) {
        if (number === '.' && this.currentDisplayStatus.includes('.')) return
        if(this.previousDisplayStatus !== '') {
            // this.calculate()
        
        }
        this.currentDisplayStatus = this.currentDisplayStatus.toString() + number.toString()
    }
    //select the counting
    switchAction(counting) {
        this.counting = counting
        this.previousDisplayStatus = this.currentDisplayStatus 
        this.currentDisplayStatus = ''
    }
    //take the value and calculate it showing on the screan
    calculate(){
        let count
        const previousState = parseFloat(this.previousDisplayStatus)
        const currentState = parseFloat(this.currentDisplayStatus)
        if (isNaN(previousState) || isNaN(currentState)) return
        switch (this.counting) {
            case '%':
                count = previousState % currentState
                break
            case '+':
                count = previousState + currentState
                break
            case '-':
                count = previousState - currentState
                break
            case '/':
                count = previousState / currentState
                break
            case 'x':
                count = previousState * currentState
                break
            default:
                return  
        }
        this.currentDisplayStatus = count
        this.counting = undefined
        this.previousDisplayStatus = ''
    }

    showNumber(number) {
        // return number
         
        const stringNumber = number.toString()
        const integerNumber = parseFloat(stringNumber.split(',')[0])
        const decimalNumber = stringNumber.split(',')[1]
        let showIntegerNumber

        if(isNaN(integerNumber)) {
            showIntegerNumber = ''
        } else {
            showIntegerNumber = integerNumber.toLocaleString('xx', {
                maximumFractionDigits: 2})
        }
        if(decimalNumber != null) {
            return `${showIntegerNumber}.${decimalNumber}`
        } else {
            return showIntegerNumber
        }
    }
    //update the display
    updateDisplay() {
        // if(this.currentDisplayStatus === '') return
        this.currentDisplayStatusTextElement.innerText = this.showNumber(this.currentDisplayStatus)
        if (this.counting != null) {
            this.previousDisplayStatusTextElement.innerText = 
                `${this.showNumber(this.previousDisplayStatus)} ${this.counting}`
        } else {
            this.previousDisplayStatusTextElement.innerText = ''//reset previousStatus
        }
        
    }
}

export default Calculator