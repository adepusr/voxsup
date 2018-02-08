define(function(require) {
  var Ember = require('ember');
  var App = require('app');

  return App.registerRoute('comments', {
    view: require('../view/commentsView'),
    controller: require('../controller/commentsController'),
    route: Ember.Route.extend({
      actions: {
        delComment: function(comment_id) {
          this.transitionTo('post', comment_id);
        }
      },
    model: function(params, transition) {
      console.log(transition.resolvedModels.post)
        return this.controllerFor('comments').findComments(transition.resolvedModels.post.id);
      },
      renderTemplate: function() {
        this.render({ into: 'post'});
      }
    })
  });
});
