import { LearnMaterial2Page } from './app.po';

describe('learn-material2 App', () => {
  let page: LearnMaterial2Page;

  beforeEach(() => {
    page = new LearnMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
