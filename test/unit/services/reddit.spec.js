import {Reddit} from '../../../src/services/reddit';
import {AppConfig} from '../../../src/appconfig';

class HttpStub {
  jsonp(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ content: { items: response } });
    })
  }
}

describe('the Reddit module', () => {

  it('sets jsonp response to images', (done) => {
    var http = new HttpStub(),
      sut = new Reddit(http),
      itemStubs = [1],
      itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.images).toBe(itemStubs);
      expect(sut.images).not.toBe(itemFake);
      done();
    });
  });

  it('calls confirm on canDeactivate', () => {
    var sut = new Reddit(),
      global = jasmine.getGlobal();
    spyOn(global, "confirm");
    sut.canDeactivate();
    expect(global.confirm).toHaveBeenCalled();
  });
});
