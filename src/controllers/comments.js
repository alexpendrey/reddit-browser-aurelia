import {inject} from 'aurelia-framework';
import {Reddit} from 'services/reddit';

@inject(Reddit)
export class Comments {
  constructor(reddit) {
    this.reddit = reddit;
  }
  activate() {
    let urlHash = location.hash.split('/');
    let commentsId = urlHash[urlHash.length-1];
    let subreddit = urlHash[2];
    this.commentsId = commentsId;
    this.subreddit = subreddit;
    /* TODO: Last comment in array seems to be more child comments in a different format */
    console.log('subreddit page ' + subreddit + ' comments ' + commentsId);
    this.reddit.getComments(commentsId, subreddit).then(response => {
        this.comments = response;
        console.info(response);
      }, reject => {
        console.error(reject);
      }
    );


  }
}
