import { PpeAngularPage } from './app.po';

describe('ppe-angular App', function() {
  let page: PpeAngularPage;

  beforeEach(() => {
    page = new PpeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
