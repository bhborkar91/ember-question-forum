import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  answerid: function(i) {
    return i;
  }
});
