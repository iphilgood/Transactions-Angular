import { TestatAppVorlagePage } from './app.po';

describe('testat-app-vorlage App', () => {
  let page: TestatAppVorlagePage;

  beforeEach(() => {
    page = new TestatAppVorlagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
