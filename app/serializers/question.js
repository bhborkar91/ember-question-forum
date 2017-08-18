import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  mapToJsonApi: function(questionInput) {
    return {
      type: 'question',
      id: questionInput.id,
      attributes: {
        question: questionInput.question
      }
    }
  },
  normalizeFindAllResponse: function (store, primaryModelClass, payload, id, requestType) {
    var responseData = [];
    var serializer = this;
    payload.forEach(function(object) {
      responseData.push(serializer.mapToJsonApi(object));
    })
    return {
      data: responseData
    };
  }
});
