import DS from 'ember-data';

export default DS.Model.extend({
  answerid: DS.attr(),
  question: DS.belongsTo('question'),
  comments: DS.hasMany('answer-comment'),
  answer: DS.attr()
});
