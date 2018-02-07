define(function(require) {
  var Ember = require('ember');
  var App = require('app');

  return App.registerRoute('comments', {
    view: require('../view/commentsView'),
    controller: require('../controller/commentsController'),
    route: Ember.Route.extend({
    model: function(params, transition) {
      console.log(params)
        return this.controllerFor('comments').findComments("1986743364699968_1986745334699771");
      },
      renderTemplate: function() {
        this.render({ into: 'post'});
      }
    })
  });
});
