import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize: function(response, request) {
    var json = response.models.map(function(object){
      return {
        questionid: object.questionid,
        question: object.question
      };
    });

    return json;
  }
});
