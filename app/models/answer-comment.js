import DS from 'ember-data';

export default DS.Model.extend({
 answer: DS.belongsTo(),
 commentid: DS.attr(),
 comment: DS.attr()
});
