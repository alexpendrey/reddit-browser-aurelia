System.register(['aurelia-framework', 'aurelia-http-client', 'services/reddit'], function (_export) {
  'use strict';

  var inject, HttpClient, Reddit, Flickr;

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
      Flickr = (function () {
        function Flickr(http, reddit) {
          _classCallCheck(this, _Flickr);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

          this.http = http;
          this.reddit = reddit;
        }

        var _Flickr = Flickr;

        _createClass(_Flickr, [{
          key: 'activate',
          value: function activate() {
            this.reddit.getPopularSubs().then(function (response) {
              console.log(response.content.data.children);
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {}
        }]);

        Flickr = inject(HttpClient, Reddit)(Flickr) || Flickr;
        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0NBS2EsTUFBTTs7Ozs7Ozs7aUNBTFgsTUFBTTs7c0NBQ04sVUFBVTs7K0JBQ1YsTUFBTTs7O0FBR0QsWUFBTTtBQU1OLGlCQU5BLE1BQU0sQ0FNTCxJQUFJLEVBQUUsTUFBTSxFQUFDOzs7ZUFKekIsT0FBTyxHQUFHLFFBQVE7ZUFDbEIsTUFBTSxHQUFHLEVBQUU7ZUFDWCxHQUFHLEdBQUcsNkZBQTZGOztBQUdqRyxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7c0JBVFUsTUFBTTs7OztpQkFXVCxvQkFBRTtBQUNSLGdCQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM1QyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQUM7V0FDSjs7O2lCQUVZLHlCQUFFLEVBRWQ7OztBQW5CVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQ2QsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJmbGlja3IuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9