import DS from 'ember-data';

export default DS.Model.extend({
  questionid: DS.attr(),
  question: DS.attr(),
  answers: DS.hasMany('answer'),
  comments: DS.hasMany('question-comment')
});
