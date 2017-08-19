import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPISerializer.extend({

  /*
  Use a parent serializer with some util methods to convert arrays and objects
  from normal json to JsonAPI json.
  Related links are used for fetch of children

  refs:
  https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
  https://guides.emberjs.com/v2.13.0/models/customizing-serializers/
  https://emberigniter.com/custom-relationship-links-json-api/
  https://www.emberjs.com/api/ember-data/2.14/classes/DS.RESTSerializer/methods/extractRelationship?anchor=extractRelationship
  https://discuss.emberjs.com/t/restadapter-loading-hasmany-relationships-with-nested-path/6627/6
  */

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
