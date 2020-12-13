import { browser, promise } from 'protractor';
export class DiscoverPage {
  navigateToDiscover(): promise.Promise<any> {
    return browser.get('');
  }
}
