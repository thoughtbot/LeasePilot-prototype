import CommentStore from "./comment_store.js";

export default class Comment {
  constructor(commentableId, body) {
    this.body = body;
    this.commentableId = commentableId;
  }

  save() {
    if (this.body === "") {
      return false;
    } else {
      new CommentStore(this.commentableId).add(this.body);
      return true;
    }
  }
}
