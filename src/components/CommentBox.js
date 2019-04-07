import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    this.shouldGoAway();
  }

  componentDidUpdate() {
    this.shouldGoAway();
  }

  shouldGoAway() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

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

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
