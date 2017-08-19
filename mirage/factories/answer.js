import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  answerid: function(i) {
    return i;
  },
  afterCreate: function(answer, server) {
    server.createList('answer-comment', 5, {
      answer: answer,
      answerid: answer.answerid,
      comment: "Answer-comment for "+answer.answer
    });
  }
});
