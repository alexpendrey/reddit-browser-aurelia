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
  getBase(url, resolve, reject) {
    return this.http.get(url).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
  }

  getPopularSubs() {
    var promise = new Promise((resolve, reject) => {
      this.http.get(this.url + this.config.popularSubs).then(response => {
        var subData = response.content.data.children;
        var subreddits = [];
        subData.forEach((sub) => {
          let s = sub.data;
          //Extend the object with custom properties:
          s.name = sub.data.display_name;
          s.href = '#/subreddit/' + sub.data.display_name;
          subreddits.push(s);
        });
        resolve(subreddits);
      }, err => {
        reject(err);
      });
    });
    return promise;
  }

  getSubreddit(subreddit) {
    var promise = new Promise((resolve, reject) => {
      var subUrl = this.url + this.config.subredditDetail.replace('${subreddit}', subreddit);
      this.http.get(subUrl).then(response => {
        var subData = response.content.data.children;
        let posts = [];
        subData.forEach(post => {
          let s = post.data;
          s.href = '#/comments/' + s.subreddit + '/' + s.id;
          posts.push(s);
        });
        resolve(posts);
      }, err => {
        reject(err);
      });
    });
    return promise;
  }

  getComments(commentsId, subreddit) {
    var promise = new Promise((resolve, reject) => {
      var commentsUrl = this.url + this.config.comments.replace('${subreddit}', subreddit);
      commentsUrl = commentsUrl.replace('${commentsId}', commentsId);
      this.http.get(commentsUrl).then(response => {
        var commentsData = response.content[1].data.children;
        let comments = [];
        commentsData.forEach(comment => {
          let s = comment.data;
          //s.href = '#/comments/' + s.subreddit + '/' + s.id;
          comments.push(s);
        });
        resolve(comments);
      }, err => {
        reject(err);
      });
    });
    return promise;
  }

}
