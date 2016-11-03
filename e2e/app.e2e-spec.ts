import { A2DashboardPage } from './app.po';

describe('a2-dashboard App', function() {
  let page: A2DashboardPage;

  beforeEach(() => {
    page = new A2DashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
