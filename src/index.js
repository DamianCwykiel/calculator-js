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
import './styles/styles.scss'

//buttons settings
const myCalculator = new Calculator(previousDisplayStatusTextElement,
    currentDisplayStatusTextElement)

    const sound = new Audio('/sound/click.wav')
//-,+,*./
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            sound.play()
            //add what's inside a button
            myCalculator.addNumber(button.innerText)
            myCalculator.updateDisplay()
        })
    })
//7894561230
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            sound.play()
            //add what's inside a button
            myCalculator.switchAction(button.innerText)
            myCalculator.updateDisplay()
        })
    })
//=
    equalsButton.addEventListener('click', button => {
        sound.play()
        myCalculator.calculate()
        myCalculator.updateDisplay()
    })
//C
    clearButton.addEventListener('click', button => {
        sound.play()
        myCalculator.clear()
        myCalculator.updateDisplay()
    })
//+/-
    changeValueButton.addEventListener('click', button => {
        sound.play()
        if(changeValueButton === true) {
            return currentDisplayStatus = 0
        }
        myCalculator.changeValue()
        myCalculator.updateDisplay()
    })
