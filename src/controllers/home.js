import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Reddit} from 'services/reddit';

@inject(Reddit)
export class Home {
  constructor(reddit) {
    this.reddit = reddit;
  }
  activate() {
    this.reddit.getPopularSubs().then(response => {
      this.subs = response;
        console.info(response);
    },
    reject => {
      console.error(reject);
    })
  }

}
