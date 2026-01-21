import {test, expect} from '@playwright/test';

test('Single File uploadtest', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const filePath="E:\\Carrier-syncup study material\\Restassured Notes.pdf";
    let fileInput = await page.locator('#singleFileInput');
    await fileInput.scrollIntoViewIfNeeded();
    await fileInput.setInputFiles(filePath);
    await expect(fileInput).toHaveValue('C:\\fakepath\\Restassured Notes.pdf');
});


test('Multiple File uploadtest', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const filePath1="E:\\Carrier-syncup study material\\Restassured Notes.pdf"; 
        const filePath2="E:\\Carrier-syncup study material\\PlayWrightNotes.pdf";
        let fileInput = await page.locator('#multipleFilesInput');
    await fileInput.scrollIntoViewIfNeeded();
    await fileInput.setInputFiles([filePath1, filePath2]);
});