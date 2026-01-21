// @ts-check
import {test,expect} from '@playwright/test';

test('Login with valid credentials', async ({page}) => {
  
  await page.goto("https://automationexercise.com/");
  //GetByRole example
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  //GetByLabel example
  await page.locator("input[data-qa='login-email']").fill('rameshamale26@gmail.com');

  await page.locator("input[data-qa='login-password']").fill('Amale@1234');
  // GetByText example
  await page.locator("button[data-qa='login-button']").click();
  // getByAltText
  await expect (page.getByAltText('Website for automation practice')).toBeVisible();

})


