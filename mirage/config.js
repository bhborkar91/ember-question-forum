export default function(server) {


  this.namespace = '/api';
  this.get('/questions', function (schema, request) {
    var mirageData = schema.questions.all();
    console.log(JSON.stringify(mirageData));
    return mirageData;
  });

  this.get('/questions/:qid/answers', function(schema, request) {
    var qid = request.params.qid;
    var question = schema.questions.findBy({questionid: qid});
    var mirageData = schema.answers.find(question.answerIds);
    return mirageData;
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
