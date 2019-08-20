import React from 'react'
import {shallow} from 'enzyme'
import Display from './display'

describe("Display component",()=>{
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<Display displayValue={''}/>)
    });
    it('should render correctly',()=>{
        expect(wrapper).toMatchSnapshot()
    })

    it("render the display component",() => {
        expect(wrapper.find('div').length).toEqual(1);
    })

    it("display the value",()=>{
        wrapper.setProps({displayValue:'test'})
        expect(wrapper.text()).toEqual('test')
    })
})
