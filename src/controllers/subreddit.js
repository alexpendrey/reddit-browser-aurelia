import {inject} from 'aurelia-framework';
import {Reddit} from 'services/reddit';

@inject(Reddit)
export class Subreddit {
  constructor(reddit) {
    this.reddit = reddit;
  }
  activate() {
    //TODO: A better way to get the URL. Maybe through aurelia-router?
    let urlHash = location.hash.split('/');
    let subreddit = urlHash[urlHash.length-1];
    this.subreddit = subreddit;

    console.log('subreddit page ' + subreddit);
    this.reddit.getSubreddit(subreddit).then(response => {
        this.posts = response;
        console.log(response);
      }, reject => {
        console.error(reject);
        }
    );


  }
}
