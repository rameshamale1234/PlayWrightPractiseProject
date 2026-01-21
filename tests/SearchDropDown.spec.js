import { test, expect } from '@playwright/test';

test('Flipkart search dropdown', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  const searchBox = page.locator("input[title='Search for Products, Brands and More']");
  await searchBox.fill('iphone');

  // wait for suggestions to load
  const suggestions = page.locator("li >> text=iphone");
  await expect(suggestions.first()).toBeVisible();

  const count = await suggestions.count();
  console.log("Suggestions count:", count);

  for (let i = 0; i < count; i++) {
    console.log(await suggestions.nth(i).innerText());
  }
});
