import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {AppConfig} from 'appconfig';

@inject(HttpClient, AppConfig)
export class Reddit {
  constructor(http, config) {
    this.http = http;
    this.config = config;
    this.url = this.config.redditUrl;
  }
  getPopularSubs() {
    var that = this;
    var subs = new Promise(function(resolve, reject) {
      that.http.get(that.url + that.config.popularSubs).then(response => {
        var subData = response.content.data.children;
        var subreddits = [];
        subData.forEach(function(sub) {
          var s = {
            name: sub.data.display_name,
            href: '#/subreddit/' + sub.data.display_name
          };
          subreddits.push(s);
        });
        resolve(subreddits);
      });
    });
    return subs;

  }
}
