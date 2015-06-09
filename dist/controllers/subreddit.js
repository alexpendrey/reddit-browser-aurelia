System.register(['aurelia-framework', 'services/reddit'], function (_export) {
  'use strict';

  var inject, Reddit, Subreddit;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesReddit) {
      Reddit = _servicesReddit.Reddit;
    }],
    execute: function () {
      Subreddit = (function () {
        function Subreddit(reddit) {
          _classCallCheck(this, _Subreddit);

          this.reddit = reddit;
        }

        var _Subreddit = Subreddit;

        _createClass(_Subreddit, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            var urlHash = location.hash.split('/');
            var subreddit = urlHash[urlHash.length - 1];
            this.subreddit = subreddit;

            console.log('subreddit page ' + subreddit);
            this.reddit.getSubreddit(subreddit).then(function (response) {
              _this.posts = response;
              console.log(response);
            }, function (reject) {
              console.error(reject);
            });
          }
        }]);

        Subreddit = inject(Reddit)(Subreddit) || Subreddit;
        return Subreddit;
      })();

      _export('Subreddit', Subreddit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3N1YnJlZGRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0JBSWEsU0FBUzs7Ozs7Ozs7aUNBSmQsTUFBTTs7K0JBQ04sTUFBTTs7O0FBR0QsZUFBUztBQUNULGlCQURBLFNBQVMsQ0FDUixNQUFNLEVBQUU7OztBQUNsQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7eUJBSFUsU0FBUzs7OztpQkFJWixvQkFBRzs7O0FBRVQsZ0JBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLGdCQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxnQkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLG1CQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLGdCQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakQsb0JBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUN0QixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QixFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQ1gscUJBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckIsQ0FDSixDQUFDO1dBR0g7OztBQXBCVSxpQkFBUyxHQURyQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTOzs7MkJBQVQsU0FBUyIsImZpbGUiOiJjb250cm9sbGVycy9zdWJyZWRkaXQuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9