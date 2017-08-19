import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPISerializer.extend({
  customNormalizeArray: function(store, primaryModelClass, payload, id, requestType) {
    var responseData = [];
    var serializer = this;
    payload.forEach(function(object) {
      responseData.push(serializer.mapToJsonApi(object));
    });
    var jsonApiData = {
      data: responseData
    };
    return jsonApiData;
  },
  customNormalizeObject: function(store, primaryModelClass, payload, id, requestType) {
    var serializer = this;
    var responseData = serializer.mapToJsonApi(payload);
    var jsonApiData = {
      data: responseData
    };
    return jsonApiData;
  },
  getLink: function(linkPath) {
    return {
      links: {
        related: config.apiNamespace+linkPath
      }
    };
  },
  mapToJsonApi: function(object) {
    // TODO: default implementation to be added here
  }
});
