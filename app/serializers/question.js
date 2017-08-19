import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPISerializer.extend({

  mapToJsonApi: function(questionInput) {

    var jsonData = {
      type: 'question',
      id: questionInput.questionid,
      attributes: {
        questionid: questionInput.questionid,
        question: questionInput.question
      },
      relationships: {
        answers: {
          links: {
            related: config.apiNamespace+'/questions/'+questionInput.questionid+'/answers'
          }
        }
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
    return jsonApiData;
  }
});
