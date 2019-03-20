import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a comment:</h2>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComment}>
          Fetch comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
