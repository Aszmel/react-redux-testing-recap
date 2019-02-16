import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has a text area and button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    wrapper.update();
  });

  it("has a text area that user can type into", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("simulate button click (in real form submit) and clear textarea", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
