import {test, expect} from '@playwright/test';

test("Drag and Drop", async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com/');
   let source=await page.getByText("Drag me to my target");
   let target=await page.locator("#droppable");
   await source.scrollIntoViewIfNeeded();
   await source.dragTo(target);
});