import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  questionid: function(i) {
    return i;
  },
  question: function(i) {
    return "Question #"+i;
  },
  afterCreate: function(question, server) {
    server.createList('answer', 5, {
      question: question,
      questionid: question.questionid,
      answer: "Answer to "+question.question
    });
    server.createList('question-comment', 5, {
      question: question,
      questionid: question.questionid,
      comment: "Question-comment for "+question.question
    });
  }
});
