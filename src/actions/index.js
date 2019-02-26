import { SAVE_COMMENT, FETCH_COMMENT } from "./types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComment(comment) {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENT,
    payload: response
  };
}
