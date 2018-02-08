define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
    </div> \
    <table class="table table-striped table-hover"> \
    <thead><tr><th>User Name</th><th>Message</th><th></th></tr></thead> \
    <tbody> \
      {{#each comment in model}} \
        <tr> \
          <td>{{comment.from.name}}</td> \
          <td>{{comment.message}}</td> \
          <td><input type="button" class="btn" value="Delete" {{action deleteComment comment.id}}/></td> \
        </tr> \
      {{/each}} \
    </tbody> \
  </table> \
  ');

  return Ember.View.extend({
    template: T
  });
});
