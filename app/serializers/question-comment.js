import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  mapToJsonApi: function(object) {
    var jsonData = {
      type: 'question-comment',
      id: object.commentid,
      attributes: {
        commentid: object.commentid,
        comment: object.comment
      }
    };
    return jsonData;
  },

  normalizeFindHasManyResponse: function(store, primaryModelClass, payload, id, requestType) {
    return this.customNormalizeArray(store, primaryModelClass, payload, id, requestType);
  }
});
