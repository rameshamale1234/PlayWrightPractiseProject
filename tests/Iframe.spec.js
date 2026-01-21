import {test, expect} from '@playwright/test';

test('Iframe handling', async ({ page }) => {
    await page.goto('https://elementdir.com/iframes');
    const iframe = page.frameLocator('iframe[title="postMessage Demo"]');
    let element=await iframe.getByText('Send Message to Parent');
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await element.click();
});