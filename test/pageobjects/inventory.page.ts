import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {

    public fourthImage ()  {
        return $('#item_4_img_link');
    }

    /**
    * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public open (path: string) {
        return browser.url(`https://saucedemo.com${path}`)
    }
}

export default new InventoryPage();
