System.register(['aurelia-framework', 'aurelia-http-client', 'appconfig'], function (_export) {
  'use strict';

  var inject, HttpClient, AppConfig, Reddit;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_appconfig) {
      AppConfig = _appconfig.AppConfig;
    }],
    execute: function () {
      Reddit = (function () {
        function Reddit(http, config) {
          _classCallCheck(this, _Reddit);

          this.http = http;
          this.config = config;
          this.url = this.config.redditUrl;
        }

        var _Reddit = Reddit;

        _createClass(_Reddit, [{
          key: 'getBase',
          value: function getBase(url, resolve, reject) {
            return this.http.get(url).then(function (response) {
              resolve(response);
            }, function (err) {
              reject(err);
            });
          }
        }, {
          key: 'getPopularSubs',
          value: function getPopularSubs() {
            var _this = this;

            var promise = new Promise(function (resolve, reject) {
              _this.http.get(_this.url + _this.config.popularSubs).then(function (response) {
                var subData = response.content.data.children;
                var subreddits = [];
                subData.forEach(function (sub) {
                  var s = sub.data;

                  s.name = s.display_name;
                  s.href = '#/subreddit/' + s.display_name;

                  s.header_img = s.header_img ? s.header_img : 'unknown.jpg';
                  subreddits.push(s);
                });
                resolve(subreddits);
              }, function (err) {
                reject(err);
              });
            });
            return promise;
          }
        }, {
          key: 'getSubreddit',
          value: function getSubreddit(subreddit) {
            var _this2 = this;

            var promise = new Promise(function (resolve, reject) {
              var subUrl = _this2.url + _this2.config.subredditDetail.replace('${subreddit}', subreddit);
              _this2.http.get(subUrl).then(function (response) {
                var subData = response.content.data.children;
                var posts = [];
                subData.forEach(function (post) {
                  var s = post.data;
                  s.comments_href = '#/comments/' + s.subreddit + '/' + s.id;
                  posts.push(s);
                });
                resolve(posts);
              }, function (err) {
                reject(err);
              });
            });
            return promise;
          }
        }, {
          key: 'getComments',
          value: function getComments(commentsId, subreddit) {
            var _this3 = this;

            var promise = new Promise(function (resolve, reject) {
              var commentsUrl = _this3.url + _this3.config.comments.replace('${subreddit}', subreddit);
              commentsUrl = commentsUrl.replace('${commentsId}', commentsId);
              _this3.http.get(commentsUrl).then(function (response) {
                var commentsData = response.content[1].data.children;
                var comments = [];
                commentsData.forEach(function (comment) {
                  var s = comment.data;

                  comments.push(s);
                });
                resolve(comments);
              }, function (err) {
                reject(err);
              });
            });
            return promise;
          }
        }]);

        Reddit = inject(HttpClient, AppConfig)(Reddit) || Reddit;
        return Reddit;
      })();

      _export('Reddit', Reddit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDM0QsdUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2YsQ0FBQyxDQUFDO0FBQ0gsdUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztlQUNoQixFQUFFLFVBQUEsR0FBRyxFQUFJO0FBQ1Isc0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNiLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztBQUNILG1CQUFPLE9BQU8sQ0FBQztXQUNoQjs7O2lCQUVVLHFCQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUU7OztBQUNqQyxnQkFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQzdDLGtCQUFJLFdBQVcsR0FBRyxPQUFLLEdBQUcsR0FBRyxPQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRix5QkFBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9ELHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzFDLG9CQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckQsb0JBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQiw0QkFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM5QixzQkFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFckIsMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQztBQUNILHVCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDbkIsRUFBRSxVQUFBLEdBQUcsRUFBSTtBQUNSLHNCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDYixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7QUFDSCxtQkFBTyxPQUFPLENBQUM7V0FDaEI7OztBQXpFVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQ2pCLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoic2VydmljZXMvcmVkZGl0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==