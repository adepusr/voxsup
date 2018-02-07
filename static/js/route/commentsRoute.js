define(function(require) {
  var Ember = require('ember');
  var App = require('app');

  return App.registerRoute('comments', {
    view: require('../view/commentsView'),
    controller: require('../controller/commentsController'),
    route: Ember.Route.extend({
      model: function(params, transition) {
        console.log(params)
        return this.controllerFor('comments').findComments(params.post_id);
      },
      renderTemplate: function() {
        this.render({ into: 'post'});
      }
    })
  });
});
