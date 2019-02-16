import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import { wrap } from "module";

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

it("has a text area that user can type into", () => {
  wrapper.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapper.update();
});
