import { NgxExamplesPage } from './app.po';

describe('ngx-examples App', () => {
  let page: NgxExamplesPage;

  beforeEach(() => {
    page = new NgxExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
