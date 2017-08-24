import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
});
