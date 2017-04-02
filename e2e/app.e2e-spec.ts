import { ReversiAppPage } from './app.po';

describe('reversi-app App', () => {
  let page: ReversiAppPage;

  beforeEach(() => {
    page = new ReversiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
