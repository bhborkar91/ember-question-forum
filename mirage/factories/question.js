import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  questionid: function(i) {
    return i;
  },
  question: function(i) {
    return "Question #"+i;
  },
  afterCreate: function(question, server) {
    server.createList('answer', 10, {
      question: question,
      answer: "Answer to "+question.question
    });
    server.createList('question-comment', 10, {
      question: question,
      comment: "Question-comment for "+question.question
    });
  }
});
