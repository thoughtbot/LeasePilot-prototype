export default class Comment {
  constructor(commentableId, body) {
    this.body = body;
    this.commentableId = commentableId;
  }

  save() {
    if (this.body === "") {
      alert("Comment is empty");
    } else {
      localStorage.setItem(`commentable-${this.commentableId}`, this.body);
    }
  }
}
