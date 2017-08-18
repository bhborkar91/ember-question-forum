import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    answers: {
      embedded: 'always'
    }
  },
  mapToJsonApi: function(questionInput) {

    var jsonData = {
      type: 'question',
      id: questionInput.questionid,
      attributes: {
        questionid: questionInput.questionid,
        question: questionInput.question
      }
    };

    return jsonData;
  },
  normalizeFindAllResponse: function (store, primaryModelClass, payload, id, requestType) {
    var responseData = [];
    var serializer = this;
    payload.forEach(function(object) {
      responseData.push(serializer.mapToJsonApi(object));
    })
    var jsonApiData = {
      data: responseData
    };
    console.log(jsonApiData);
    return jsonApiData;
  }
});
