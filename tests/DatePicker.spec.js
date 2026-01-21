import { test, expect } from '@playwright/test';

test('DatePicker handling', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const datePicker = page.locator('#datepicker');
  await datePicker.scrollIntoViewIfNeeded();
  await datePicker.click();

  const targetMonth = 'March';
  const targetYear = '2026';

  let headerText = await page.locator('.ui-datepicker-title').textContent();

  while (
    headerText &&
    !(headerText.includes(targetMonth) && headerText.includes(targetYear))
  ) {
    await page.locator('.ui-datepicker-next').click();
    headerText = await page.locator('.ui-datepicker-title').textContent();
  }

  // Click date from table
  await page
    .locator('table.ui-datepicker-calendar a[data-date="18"]')
    .click();

  // Validate
  await expect(datePicker).toHaveValue('03/18/2026');

  await page.locator('body').click();

});
