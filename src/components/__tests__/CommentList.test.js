import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one LI per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows the text for comment 1 and 2", () => {
  //evey comment must be checked separately
  //and with use of render (.text() not recommended by docs)
  expect(wrapper.render().text()).toContain("Comment 1");
  expect(wrapper.render().text()).toContain("Comment 2");
});
