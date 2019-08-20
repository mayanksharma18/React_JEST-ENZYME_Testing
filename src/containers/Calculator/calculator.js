import React from 'react'
import './calculator.css'
import Display from '../../components/Display/display'
class Calculator extends React.Component{
    state={
        displayValue:"0",
        numbers:[],
        operators:[],
        selectedOperators:"",
        selectedNumber:""
    }

    render=()=>{
        const {displayValue}=this.state
      return(
          
          <div className="calculator-container">
          <Display displayValue={displayValue}/>
          </div>

      )
    }

}
 export default Calculator