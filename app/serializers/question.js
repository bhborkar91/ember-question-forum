import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  mapToJsonApi: function(questionInput) {
    var jsonData = {
      type: 'question',
      id: questionInput.questionid,
      attributes: {
        questionid: questionInput.questionid,
        question: questionInput.question
      },
      relationships: {
        answers: this.getLink('/questions/'+questionInput.questionid+'/answers'),
        comments: this.getLink('/questions/'+questionInput.questionid+'/comments')
      }
    };
    return jsonData;
  },

  normalizeFindAllResponse: function(store, primaryModelClass, payload, id, requestType) {
    return this.customNormalizeArray(store, primaryModelClass, payload, id, requestType);
  }
});
