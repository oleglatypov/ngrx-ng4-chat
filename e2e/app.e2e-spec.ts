import { NgrxNg4ChatPage } from './app.po';

describe('ngrx-ng4-chat App', () => {
  let page: NgrxNg4ChatPage;

  beforeEach(() => {
    page = new NgrxNg4ChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
