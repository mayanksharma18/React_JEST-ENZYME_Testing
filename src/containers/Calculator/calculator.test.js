import React from "react";
import { shallow } from "enzyme";
import Calculator from "./calculator";
import Display from "../../components/Display/display";
import KeyComponent from "../../components/Key/key";
describe("Calculator", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });
  // it('should reneder correctly',()=>{
  //     expect(wrapper).toMatchSnapshot()
  // })

  it("renders", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render the display component", () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });
  it('should render the Display and Keypad Components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue} />,
      <KeyComponent
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    ])).toEqual(true);
  });
});
