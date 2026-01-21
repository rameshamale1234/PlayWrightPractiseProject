import {test, expect} from '@playwright/test';

test("MouseHover Handling", async ({ page }) => {   
    await page.goto('https://testautomationpractice.blogspot.com/');
    const mouseHoverBtn = page.getByText("Point Me");
    await mouseHoverBtn.hover();
    await page.waitForTimeout(3000);
});