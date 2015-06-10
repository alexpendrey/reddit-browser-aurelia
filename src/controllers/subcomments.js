import {inject} from 'aurelia-framework';
import {Reddit} from 'services/reddit';

@inject(Reddit)
export class SubComments {
  constructor(reddit) {
    this.reddit = reddit;
  }
  activate(subcomments) {
    console.log('subcomments loaded');


  }
}
