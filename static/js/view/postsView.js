define(function(require) {
  var Ember = require('ember');
  require('./dateHelper');

  var T = Ember.Handlebars.compile('\
    <h4>Posts</h4> \
    <div class="form-group"> \
      <input type="text" class="form-control input-sm" value=form.data/> \
      <input type="button" class="btn" value="Post" {{action sendPost form}}/> \
    </div> \
    <table class="table table-striped table-hover"> \
      <thead><tr><th></th><th>Date</th><th>Picture</th><th>Message</th><th>Link</th><th>Source</th></tr></thead> \
      <tbody> \
        {{#each post in model}} \
        {{log post}}\
          <tr> \
            <td><img {{bindAttr src=post.icon}}></td> \
            <td>{{date post.created_time}}</td> \
            <td><img class="pic-thumbnail" {{bindAttr src=post.picture}}></td> \
            <td>{{post.message}}</td> \
            <td><a {{bindAttr href=post.link}}>{{post.name}}</a></td> \
            <td> \
            {{#if post.source}} \
            <a {{bindAttr href=post.source}}>Click Here</a></td> \
            {{/if}} \
            <td><input type="button" class="btn" value="View Comments" {{action showPost post}}/></td>\
          </tr> \
        {{/each}} \
      </tbody> \
    </table> \
  ');

  return Ember.View.extend({
    template: T
  });
});
