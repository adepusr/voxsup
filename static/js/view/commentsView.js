define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
    <div class="well"> \
      This section should display a list of recent comments for the active post, and allow the user to \
      delete a comment with the click of a button. \
    </div> \
    <table class="table table-striped table-hover"> \
    <thead><tr><th></th><th>Date</th><th>Picture</th><th>Message</th><th>Link</th><th>Source</th></tr></thead> \
    <tbody> \
      {{#each post in model}} \
        <tr style="cursor:pointer;" {{action showPost post}}> \
          <td><img {{bindAttr src=post.icon}}></td> \
          <td>{{date post.created_time}}</td> \
          <td><img class="pic-thumbnail" {{bindAttr src=post.picture}}></td> \
          <td>{{post.message}}</td> \
          <td><a {{bindAttr href=post.link}}>{{post.name}}</a></td> \
          <td><a {{bindAttr href=post.source}}>{{post.source}}</a></td> \
        </tr> \
      {{/each}} \
    </tbody> \
  </table> \
  {{outlet}}\
  ');

  return Ember.View.extend({
    template: T
  });
});
