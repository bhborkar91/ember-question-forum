import DS from 'ember-data';

export default DS.Model.extend({
  answerid: DS.attr(),
  answer: DS.attr()
});
