import { WheaterAppPage } from './app.po';

describe('wheater-app App', function() {
  let page: WheaterAppPage;

  beforeEach(() => {
    page = new WheaterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
