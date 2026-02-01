import {expect, test} from '@playwright/test';

test('Element should be visibile on the page', async ({page}) => {
    await page.goto('https://automationexercise.com/');
    const element =await page.locator("//i[@class='fa fa-home']");
    let isVisible =await expect(element).toBeVisible();
    console.log('Is element visible:', isVisible);
    await expect(element).toHaveCount(1);
    await expect(element).toHaveAttribute('class', 'fa fa-home');
    await expect(element).toHaveCSS('color', 'rgb(255, 165, 0)');
});

test ("Element shoud have attribute", async ({page}) => {
    await page.goto('https://automationexercise.com/');
    const element = page.locator("//img[@alt='Website for automation practice']");
    await expect(element).toBeVisible();
    await expect(element).toHaveAttribute('alt', 'Website for automation practice');
});

test ("Element shoud have text", async ({page}) => {
    await page.goto('https://automationexercise.com/');
    let locator = page.locator("//h2[normalize-space()='Features Items']");
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toHaveText('Features Items');
});