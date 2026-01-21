import {test,expect} from '@playwright/test';

test('Handle checkbox',async({page}) =>{
    await page.goto("https://demoqa.com/checkbox");
    let Homecheckbox = await page.locator("//input[@id='tree-node-home']//parent::label");
    await Homecheckbox.scrollIntoViewIfNeeded();
    await Homecheckbox.check();
    expect (await Homecheckbox.isChecked()).toBeTruthy();
});
