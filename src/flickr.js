import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Reddit} from 'services/reddit';


export class Flickr{
  static inject = [HttpClient, Reddit];
  heading = 'Flickr';
  images = [];
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

  constructor(http, reddit){
    //this.http = http;
    reddit.test();
    console.time('flickr');
  }

  activate(){
    //return this.http.jsonp(this.url).then(response => {
    //  this.images = response.content.items;
    //  console.timeEnd('flickr');
    //});
  }

  canDeactivate(){
    //return confirm('Are you sure you want to leave?');
  }
}
