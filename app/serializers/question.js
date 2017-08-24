import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs : {
    answers : {
      embedded : 'always'
    },
    comments : {
      embedded : 'always'
    }
  }
});
