import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  question: belongsTo(),
  comments: hasMany('answer-comment')
});
