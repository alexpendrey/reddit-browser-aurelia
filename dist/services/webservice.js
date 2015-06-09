System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Reddit;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Reddit = (function () {
        function Reddit(http) {
          _classCallCheck(this, _Reddit);

          this.http = http;
        }

        var _Reddit = Reddit;

        _createClass(_Reddit, [{
          key: 'getRequest',
          value: function getRequest() {}
        }]);

        Reddit = inject(HttpClient)(Reddit) || Reddit;
        return Reddit;
      })();

      _export('Reddit', Reddit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dlYnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLE1BQU07Ozs7Ozs7O2lDQUpYLE1BQU07O3NDQUNOLFVBQVU7OztBQUdMLFlBQU07QUFDTixpQkFEQSxNQUFNLENBQ0wsSUFBSSxFQUFFOzs7QUFDaEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3NCQUhVLE1BQU07Ozs7aUJBSVAsc0JBQUcsRUFFWjs7O0FBTlUsY0FBTSxHQURsQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJzZXJ2aWNlcy93ZWJzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==