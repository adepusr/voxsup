define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
    <div class="well"> \
      This section should display a list of recent comments for the active post, and allow the user to \
      delete a comment with the click of a button. \
    </div> \

    <div> \
    {{#each comment in model}} \
         <h4>{{comment.message}}<h4> \
         <h4>{{comment.from.name}}<h4> \
    {{/each}} \
    </div> \
  ');

  return Ember.View.extend({
    template: T
  });
});
