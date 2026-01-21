import {test, expect} from '@playwright/test';

test("Accept alert handling", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Register dialog handler FIRST
    page.once('dialog', async dialog => {
        console.log("Alert message:", dialog.message());
        await dialog.accept();
    });

    const alertBtn = page.locator("#alertBtn");
    await alertBtn.scrollIntoViewIfNeeded();
    await alertBtn.click();

    await page.waitForTimeout(3000);
});



test("Dismiss alert handling", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Register dialog handler FIRST
    page.once('dialog', async dialog => {
        console.log("Confirm alert message:", dialog.message());
        await dialog.dismiss();
    });

    const confirmBtn = page.locator("#confirmBtn");
    await confirmBtn.scrollIntoViewIfNeeded();
    await confirmBtn.click();

    await page.waitForTimeout(3000);
});


test("Prompt alert handling", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');        
    const promptInput = "Playwright User";
    // Register dialog handler FIRST
    page.once('dialog', async dialog => {
        console.log("Prompt alert message:", dialog.message());
        await dialog.accept(promptInput);
    }); 
    const promptBtn = page.locator("#promptBtn");
    await promptBtn.scrollIntoViewIfNeeded();
    await promptBtn.click();        
});