import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  mapToJsonApi: function(object) {
    return {
      type: 'answer',
      id: object.answerid,
      attributes: {
        answer: object.answer
      },
      relationships: {
        comments: this.getLink('/questions/'+object.questionid+'/answers/'+object.answerid+'/comments')

      }
    }
  },
  normalizeFindHasManyResponse: function(store, primaryModelClass, payload, id, requestType) {
    return this.customNormalizeArray(store, primaryModelClass, payload, id, requestType);
  }
});
