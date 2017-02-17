import { WorkshopWeb101Page } from './app.po';

describe('workshop-web101 App', () => {
  let page: WorkshopWeb101Page;

  beforeEach(() => {
    page = new WorkshopWeb101Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
