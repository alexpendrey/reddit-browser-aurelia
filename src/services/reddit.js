import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Reddit {
  constructor(http) {
    this.http = http;
  }
  test() {
    console.log('Reddit test');
  }
}
