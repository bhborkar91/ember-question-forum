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
        }).then(function(answerList) {
          q.answers = answerList;
          console.log("Answers for question "+q.questionid+" = " +JSON.stringify(answerList));
          var answerCommentComposite = answerList.map((a) => adapter.ajax({
            type: 'GET',
            url: adapter.buildUrl('/questions/'+q.questionid+'/answers/'+a.answerid+'/comments')
          }).then(function(commentList) {
            a.comments = commentList;
          }));
          return Promise.all(answerCommentComposite);
        })
      );

      var questionCommentComposite = questionList.map((q) => adapter.ajax({
          type: 'GET',
          url: adapter.buildUrl('/questions/'+q.questionid+'/comments')
        }).then(function(commentList) {
          q.comments = commentList;
        })
      );

      return Promise.all(answerComposite, questionCommentComposite).then(function() {
        console.log("Final question list : "+JSON.stringify(questionList));
        var data = questionList.map((q) => adapter.morphQuestion(q));
        console.log(JSON.stringify(data));
        return data;
      });

    });

    return finalCall;
  }
});
