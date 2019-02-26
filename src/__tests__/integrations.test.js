import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // done (invoked in setTimeout below) make 'jest' to wait
  //amount we want (100ms below) to make moxios act with
  //fetching before next test throw an error, we wait for moxios,
  // then checking if our '2' fake api comments were fetched and
  //displayed in forms of <li>
  //------------------------
  // Try to render the entire app
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComments' button and click it
  wrapper.find(".fetch-comments").simulate("click");
  // *** adding 'pause' to let moxios have time before last test ***
  // Expect to find a list of comments
  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);
    done();
    wrapper.unmount();
  }, 100);
});
