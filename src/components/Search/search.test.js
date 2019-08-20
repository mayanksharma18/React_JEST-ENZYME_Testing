import React from 'react'
import Enzyme,{shallow,mount} from 'enzyme'
import Search from './index'
import Adapter from 'enzyme-adapter-react-16'
import { writeHeapSnapshot } from 'v8';

Enzyme.configure({adapter:new Adapter})

describe("Search Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<Search/>)
        expect(wrapper.exists()).toBe(true);
    })

    test("user test echoed",()=>{
        const wrapper=shallow(<Search performSearch={()=>{}}/>)
        wrapper.find("input").simulate("change",{
            target:{value:"hello"}
        })

        expect(wrapper.find("input").props().value).toEqual("hello") 

    })

    test("When the form is submitted the event is cancelled",()=>{
        const  wrapper = shallow(<Search/>);
        let prevented =false;
        wrapper.find('form').simulate("submit",{
            preventDefault: ()=>{
                prevented =true;
            }
        })
        expect(prevented).toBe(true)
    })

    test("renders search results when the articles change",()=>{
        const wrapper=mount(<Search articles={[]}/>);

        wrapper.setProps({
            articles:[{webUrl:"https://google.com",webTitle:"Google Search"}]
        })
        expect(wrapper.find("a").prop("href")).toEqual("https://google.com")
    })
});