import React from "react"
import Enzyme ,{shallow} from 'enzyme'
import SearchResults from './index';
import Adapter from 'enzyme-adapter-react-16'
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({adapter: new Adapter()})


const mockArticle =[{
    webUrl:"http://google.com",
    webTitle:"This is google"
    
}]

describe("Searchresults component",()=>{
    test("renders",()=>{
        const wrapper = shallow(<SearchResults article={mockArticle}/>)
        expect(wrapper).toMatchSnapshot();
    })
    test("when articles is empty",()=>{
        const wrapper=shallow(<SearchResults />);
        expect(wrapper).toMatchSnapshot()
    })

    test("doesnt break without articles",()=>{
        const wrapper=shallow(<SearchResults/>)
        expect(wrapper.find("li")).toHaveLength(0)
    })
    
    test("doesnt break with an empty array",()=>{
        const wrapper=shallow(<SearchResults articles={[]} />)

        expect(wrapper.find("li")).toHaveLength(0)
    })

})