System.register(['aurelia-framework', 'aurelia-http-client', 'services/reddit'], function (_export) {
  'use strict';

  var inject, HttpClient, Reddit, Home;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_servicesReddit) {
      Reddit = _servicesReddit.Reddit;
    }],
    execute: function () {
      Home = (function () {
        function Home(reddit) {
          _classCallCheck(this, _Home);

          this.reddit = reddit;
        }

        var _Home = Home;

        _createClass(_Home, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.reddit.getPopularSubs().then(function (response) {
              _this.subs = response;
              console.info(response);
            }, function (reject) {
              console.error(reject);
            });
          }
        }]);

        Home = inject(Reddit)(Home) || Home;
        return Home;
      })();

      _export('Home', Home);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tDQUthLElBQUk7Ozs7Ozs7O2lDQUxULE1BQU07O3NDQUNOLFVBQVU7OytCQUNWLE1BQU07OztBQUdELFVBQUk7QUFDSixpQkFEQSxJQUFJLENBQ0gsTUFBTSxFQUFFOzs7QUFDbEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7O29CQUhVLElBQUk7Ozs7aUJBSVAsb0JBQUc7OztBQUNULGdCQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM1QyxvQkFBSyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ25CLHFCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFCLEVBQ0QsVUFBQSxNQUFNLEVBQUk7QUFDUixxQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QixDQUFDLENBQUE7V0FDSDs7O0FBWlUsWUFBSSxHQURoQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJjb250cm9sbGVycy9ob21lLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==