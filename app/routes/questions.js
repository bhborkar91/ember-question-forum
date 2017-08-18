import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        question: "Who?",
        answers: [
          {
            id: 1,
            answer: "Me",
            comments: [
              {
                id: 1,
                comment: "ok"
              },
              {
                id: 2,
                comment: "i see"
              }
            ]
          },
          {
            id: 2,
            answer: "You",
            comments: [
              {
                id: 3,
                comment: "ok"
              },
              {
                id: 4,
                comment: "i see"
              }
            ]
          }
        ],
        comments: [
          {
            id: 5,
            comment: "Really?"
          },
          {
            id: 6,
            comment: "Must we ask that?"
          }
        ]
      },
      {
        id: 2,
        question: "Who else?",
        answers: [
          {
            id: 3,
            answer: "Me",
            comments: [
              {
                id: 7,
                comment: "ok"
              },
              {
                id: 8,
                comment: "i see"
              }
            ]
          },
          {
            id: 4,
            answer: "You",
            comments: [
              {
                id: 9,
                comment: "ok"
              },
              {
                id: 10,
                comment: "i see"
              }
            ]
          }
        ],
        comments: [
          {
            id: 11,
            comment: "Really?"
          },
          {
            id: 12,
            comment: "Must we ask that?"
          }
        ]
      }
    ];
  }
});
