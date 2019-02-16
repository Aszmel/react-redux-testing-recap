import React, { Component } from "react";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //soon action & reducer to display comment
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubumit}>
        <h2>Add a comment:</h2>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
