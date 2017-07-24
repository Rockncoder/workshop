import { WorkshopPage } from './app.po';

describe('workshop App', () => {
  let page: WorkshopPage;

  beforeEach(() => {
    page = new WorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
