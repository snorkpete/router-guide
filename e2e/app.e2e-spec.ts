import { RouterGuidePage } from './app.po';

describe('router-guide App', () => {
  let page: RouterGuidePage;

  beforeEach(() => {
    page = new RouterGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
