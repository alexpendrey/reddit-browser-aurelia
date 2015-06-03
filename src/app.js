import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','home'],  moduleId: './controllers/home', nav: true, title:'Welcome' },
      { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router'}
    ]);

    this.router = router;
  }
}
