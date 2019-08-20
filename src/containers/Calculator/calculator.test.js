import React from 'react'
import {shallow} from  'enzyme'
import Calculator from './calculator'
import Display from '../../components/Display/display'
describe("Calculator",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Calculator/>)
    })

    it("renders",()=>{
        expect(wrapper.find('div').length).toEqual(1)
    })
    it("should render the display component",()=>{
        expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue}/>)).toEqual(true)
    })
    

})