import Ember from 'ember';

export default Ember.Component.extend({
  commentsVisible: true,
  answersVisible: true,
  actions: {
    toggleComments: function() {
      this.set('commentsVisible', !this.get('commentsVisible'));
    },
    toggleAnswers: function() {
      this.set('answersVisible', !this.get('answersVisible'));
    }

  }

});
