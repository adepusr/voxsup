define(function(require) {
  var breeze = require('breeze');
  var Q = require('Q');
  var DT = breeze.DataType;

  var initialize = function(metadataStore) {
    metadataStore.addEntityType({
      shortName: 'Post',
      dataProperties: {
        id: {
          dataType: DT.String,
          isPartOfKey: true
        },
        type: {
          dataType: DT.String
        },
        icon: {
          dataType: DT.String
        },
        picture: {
          dataType: DT.String
        },
        link: {
          dataType: DT.String
        },
        name: {
          dataType: DT.String
        },
        message: {
          dataType: DT.String
        },
        created_time: {
          dataType: DT.Date
        },
        source: {
          dataType: DT.String
        },
        total_count: {
          dataType: DT.Int32
        }
      }
    });
  };

  var downloadPosts = function(manager) {
    var p = {
      _VOXSUPMETHOD_: 'EDGE',
      fields:"name,source,link,message,created_time,icon,picture,comments.limit(1).summary(true),likes.summary(true)"
    };

    q = breeze.EntityQuery.from('me/posts').withParameters(p).toType('Post');
    return manager.executeQuery(q);
  };

  var downloadPost = function(manager, post_id) {
    var p = {
      _VOXSUPMETHOD_: 'OBJ'
    };

    q = breeze.EntityQuery.from(post_id).withParameters(p).toType('Post');
    return manager.executeQuery(q);  
  };

  var downloadComments = function(manager, post_id) {
    var p = {
      _VOXSUPMETHOD_: 'OBJ',
      fields: "from,like_count,message"
    };
    q = breeze.EntityQuery.from(post_id + "/comments").withParameters(p);
    return manager.executeQuery(q);  
  };
  return {
    initialize: initialize,
    downloadPosts: downloadPosts,
    downloadPost: downloadPost,
    downloadComments:downloadComments
  };
});
