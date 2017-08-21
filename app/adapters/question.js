import ApplicationAdapter from './application';
import RSVP from 'rsvp';

export default ApplicationAdapter.extend({
  ajax: Ember.$.ajax,
  findAll: function(store, type, snapshot) {

    var adapter = this;
    var finalCall = this.ajax({
      type: 'GET',
      url: this.buildUrl('/questions')
    }).then(function(questionList) {


      var answerComposite = questionList.map((q) => adapter.ajax({
          type: 'GET',
          url: adapter.buildUrl('/questions/'+q.questionid+'/answers')
        }).then(function(response) {
          q.answers = response;
        })
      );

      return Promise.all(answerComposite).then(function() {
        console.log("Final question list : "+JSON.stringify(questionList));
        var data = {data: questionList.map((q) => adapter.morphQuestion(q))};
        console.log(JSON.stringify(data));
        return data;
      });

    });

    return finalCall;
  }
});
