import { AngularOnlineShopPage } from './app.po';

describe('angular-online-shop App', function() {
  let page: AngularOnlineShopPage;

  beforeEach(() => {
    page = new AngularOnlineShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
