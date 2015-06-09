System.register([], function (_export) {
  'use strict';

  var config;

  _export('AppConfig', AppConfig);

  function AppConfig() {
    return config;
  }

  return {
    setters: [],
    execute: function () {
      config = {
        redditUrl: 'http://www.reddit.com/',
        popularSubs: 'subreddits/popular.json',
        subredditDetail: 'r/${subreddit}.json',
        comments: 'r/${subreddit}/comments/${commentsId}.json'
      };

      _export('config', config);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFDYSxNQUFNOzt1QkFPSCxTQUFTOztBQUFsQixXQUFTLFNBQVMsR0FBRztBQUN4QixXQUFPLE1BQU0sQ0FBQztHQUNqQjs7Ozs7QUFUWSxZQUFNLEdBQUc7QUFDcEIsaUJBQVMsRUFBRSx3QkFBd0I7QUFDbkMsbUJBQVcsRUFBRSx5QkFBeUI7QUFDdEMsdUJBQWUsRUFBRSxxQkFBcUI7QUFDdEMsZ0JBQVEsRUFBRSw0Q0FBNEM7T0FDdkQ7O3dCQUxZLE1BQU0iLCJmaWxlIjoiYXBwY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==