import { Eyes, 
    ClassicRunner,
    Target, 
    RectangleSize, 
    Configuration, 
    BatchInfo,
 } from '@applitools/eyes-webdriverio';

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sauce Demo', () => {
    // Credentials
    let applitoolsApiKey;

    // Applitools objects to share for all tests
    let batch;
    let config: Configuration;
    let runner: ClassicRunner;
  
    // Test-specific objects
    let eyes;

    before(async function () {
        applitoolsApiKey = process.env.APPLITOOLS_API_KEY!;
        runner = runner = new ClassicRunner();
        batch = new BatchInfo(`Sauce Demo with Classical Runner`);
        config = new Configuration();
        config.setApiKey(applitoolsApiKey);
        config.setBatch(batch);
    });

    beforeEach(async function () {
        eyes = new Eyes(runner);
        eyes.setConfiguration(config);

        browser = await eyes.open(
            browser,
            'Sauce Demo',
            this.currentTest!.fullTitle(),
            new RectangleSize(1200, 600)
          );
    });
  
  
    afterEach(async () => {
        await eyes!.closeAsync();
    });
      
    after(async () => {
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await eyes!.check(Target.window().fully().withName("Login page"));

        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.fourthImage().waitForExist();
        await eyes!.check(Target.window().fully().withName("Inventory page"));
    })


    it('should fail login with wrong credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await eyes!.check(Target.window().fully().withName("Failed Login"));
    })
})

