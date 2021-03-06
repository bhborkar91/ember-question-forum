import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize: function(response, request) {
    var json = response.models.map(function(object){
      return {
        commentid: object.commentid,
        answerid: object.answerid,
        comment: object.comment
      };
    });

    return json;
  }
});
