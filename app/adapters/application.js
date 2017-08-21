import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  buildUrl: function(args) {
    var urlParts = [this.namespace];
    urlParts.push(args);
    return urlParts.join('');
  },
  morphQuestion: function(question) {
    return {
      type: 'question',
      id: question.questionid,
      attributes: question,
      relationships: {
        answers: {
          data: question.answers.map((a) => this.morphAnswer(a))
        }
      }
    };
  },
  morphAnswer: function(answer) {
    return {
      type: 'answer',
      id: answer.answerid,
      attributes: answer
    };
  }
});
