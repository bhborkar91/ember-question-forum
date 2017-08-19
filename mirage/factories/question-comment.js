import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  commentid: function(i) {
    return i;
  }
});
