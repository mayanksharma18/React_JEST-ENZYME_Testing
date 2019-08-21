import React from "react";
import { shallow } from "enzyme";
import KeyComponent from "./key";
import { isTSAnyKeyword } from "@babel/types";

describe("KeyComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <KeyComponent
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperators={jest.fn()}
        updateDisplay={jest.fn()}
      />
    )
  });

  it("render keypad component",()=>{
    expect(wrapper.find("div").length).toEqual(1);
  })
  
});
