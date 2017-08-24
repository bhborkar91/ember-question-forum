import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  buildUrl: function(args) {
    var urlParts = [this.namespace];
    urlParts.push(args);
    return urlParts.join('');
  },
  coalesce: function(object) {
    return object === undefined ? [] : object;
  },
  morphQuestion: function(question) {
    var hash = question;
    hash.id = question.questionid;
    hash.answers = this.coalesce(question.answers).map((a) => this.morphAnswer(a));
    hash.comments = this.coalesce(question.comments).map((c) => this.morphComment(c));
    return hash;
  },
  morphAnswer: function(answer) {
    var hash = answer;
    hash.id = answer.answerid;
    hash.comments = this.coalesce(answer.comments).map((c) => this.morphComment(c));
    return hash;
  },
  morphComment: function(comment) {
    var hash = comment;
    hash.id = comment.commentid;
    return hash;
  }
});
