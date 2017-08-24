import Ember from 'ember';

export default Ember.Component.extend({
  commentsVisible: true,
  actions: {
    toggleComments: function() {
      this.set('commentsVisible', !this.get('commentsVisible'));
    }
  }
});
