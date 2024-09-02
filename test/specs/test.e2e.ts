import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'

describe('My Login application', () => {
    before(async function () {
    });

    beforeEach(async function () {
    });
  
  
    afterEach(async () => {
    });
      
    after(async () => {
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        // Capture screenshot

        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.fourthImage().waitForExist();
        // Capture screenshot
    })
})

