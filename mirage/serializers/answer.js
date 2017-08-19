import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize: function(response, request) {
    var json = response.models.map(function(object){
      return {
        answerid: object.answerid,
        answer: object.answer
      };
    });

    return json;
  }
});
