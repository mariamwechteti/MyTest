import { InternshipPage } from './app.po';

describe('internship App', () => {
  let page: InternshipPage;

  beforeEach(() => {
    page = new InternshipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
