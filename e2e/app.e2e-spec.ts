import { Cc2cPage } from './app.po';

describe('cc2c App', () => {
  let page: Cc2cPage;

  beforeEach(() => {
    page = new Cc2cPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
