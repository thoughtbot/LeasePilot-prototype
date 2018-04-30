export default class CommentStore {
  constructor(commentableId) {
    this.commentableId = commentableId;
  }

  all() {
    return JSON.parse(
      localStorage.getItem(`comments-${this.commentableId}`) || "[]"
    );
  }

  add(body) {
    localStorage.setItem(
      `comments-${this.commentableId}`,
      JSON.stringify(this.all().concat(body))
    );
  }

  remove(index) {
    const comments = this.all();
    comments.splice(index, 1);
    localStorage.setItem(
      `comments-${this.commentableId}`,
      JSON.stringify(comments)
    );
  }
}
