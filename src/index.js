'use strict'

import Calculator from './calculator'
import { numberButtons, 
        actionButtons, 
        clearButton, 
        changeValueButton, 
        equalsButton, 
        previousDisplayStatusTextElement, 
        currentDisplayStatusTextElement 
    } from './buttons'

//buttons settings
const calculator = new Calculator(previousDisplayStatusTextElement,
    currentDisplayStatusTextElement)

    const sound = new Audio('/sound/click.wav')
//-,+,*./
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            sound.play()
            //add what's inside a button
            calculator.addNumber(button.innerText)
            calculator.updateDisplay()
        })
    })
//7894561230
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            sound.play()
            //add what's inside a button
            calculator.switchAction(button.innerText)
            calculator.updateDisplay()
        })
    })
//=
    equalsButton.addEventListener('click', button => {
        sound.play()
        calculator.calculate()
        calculator.updateDisplay()
    })
//C
    clearButton.addEventListener('click', button => {
        sound.play()
        calculator.clear()
        calculator.updateDisplay()
    })
//+/-
    changeValueButton.addEventListener('click', button => {
        sound.play()
        if(changeValueButton === true) {
            return currentDisplayStatus = 0
        }
        calculator.changeValue()
        calculator.updateDisplay()
    })
