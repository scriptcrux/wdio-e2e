import Page from './page.js';

class SearchPage extends Page {
  public get getUserInput() {
    // return $('aria/Search');
    return $('.gLFyf');
  }

  public async setInput(username: string) {
    const input = await this.getUserInput.setValue(username);
  }

  public open() {
    return super.open('https://www.google.co.in/', true);
  }
}

export default new SearchPage();
