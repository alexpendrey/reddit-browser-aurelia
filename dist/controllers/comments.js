System.register(['aurelia-framework', 'services/reddit'], function (_export) {
  'use strict';

  var inject, Reddit, Comments;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesReddit) {
      Reddit = _servicesReddit.Reddit;
    }],
    execute: function () {
      Comments = (function () {
        function Comments(reddit) {
          _classCallCheck(this, _Comments);

          this.reddit = reddit;
        }

        var _Comments = Comments;

        _createClass(_Comments, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            var urlHash = location.hash.split('/');
            var commentsId = urlHash[urlHash.length - 1];
            var subreddit = urlHash[2];
            this.commentsId = commentsId;
            this.subreddit = subreddit;

            console.log('subreddit page ' + subreddit + ' comments ' + commentsId);
            this.reddit.getComments(commentsId, subreddit).then(function (response) {
              _this.comments = response;
              console.info(response);
            }, function (reject) {
              console.error(reject);
            });
          }
        }]);

        Comments = inject(Reddit)(Comments) || Comments;
        return Comments;
      })();

      _export('Comments', Comments);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzQkFJYSxRQUFROzs7Ozs7OztpQ0FKYixNQUFNOzsrQkFDTixNQUFNOzs7QUFHRCxjQUFRO0FBQ1IsaUJBREEsUUFBUSxDQUNQLE1BQU0sRUFBRTs7O0FBQ2xCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOzt3QkFIVSxRQUFROzs7O2lCQUlYLG9CQUFHOzs7QUFDVCxnQkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsZ0JBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLGdCQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLFlBQVksR0FBRyxVQUFVLENBQUMsQ0FBQztBQUN2RSxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM1RCxvQkFBSyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLHFCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDWCxxQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QixDQUNGLENBQUM7V0FHSDs7O0FBckJVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==