import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Reddit} from 'services/reddit';

@inject(HttpClient, Reddit)
export class Flickr{
  //static inject = [HttpClient, Reddit];
  heading = 'Flickr';
  images = [];
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

  constructor(http, reddit){
    this.http = http;
    this.reddit = reddit;
  }

  activate(){
    this.reddit.getPopularSubs().then(response => {
      console.log(response.content.data.children);
    });
  }

  canDeactivate(){
    //return confirm('Are you sure you want to leave?');
  }
}
