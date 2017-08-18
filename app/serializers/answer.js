import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  mapToJsonApi: function(object) {
    return {
      type: 'answer',
      id: object.answerid,
      attributes: {
        answer: object.answer
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
