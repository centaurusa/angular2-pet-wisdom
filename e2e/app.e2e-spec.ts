import { Angular2NewPage } from './app.po';

describe('angular2-new App', function() {
  let page: Angular2NewPage;

  beforeEach(() => {
    page = new Angular2NewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
