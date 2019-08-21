import React from 'react'
import './calculator.css'
import Display from '../../components/Display/display'
import KeyComponet from '../../components/Key/key'
import KeyComponent from '../../components/Key/key';
class Calculator extends React.Component{
    state = {
        // value to be displayed in <Display />
        displayValue: '0',
        // values to be displayed in number <Keys />
        numbers: [],
        // values to be displayed in operator <Keys />
        operators: [],
        // operator selected for math operation
        selectedOperator: '',
        // stored value to use for math operation
        storedValue: '',
      }
    
      callOperator = () => {
        console.log('call operation');
      }
    
      setOperator = () => {
        console.log('set operation');
      }
    
      updateDisplay = () => {
        console.log('update display');
      }
    
    

    render=()=>{
        const { displayValue, numbers, operators } = this.state;
      return(
          
          <div className="calculator-container">
          <Display displayValue={displayValue}/>
          <KeyComponent
        callOperator={this.callOperator}
        numbers={numbers}
        operators={operators}
        setOperator={this.setOperator}
        updateDisplay={this.updateDisplay}
      />
 
          </div>

      )
    }

}
 export default Calculator