import {test,expect} from '@playwright/test';

test('dropdown handling',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let dropedown = await page.locator('#country');
    dropedown.scrollIntoViewIfNeeded();
    //select by value 
    await dropedown.selectOption('India');
    expect (await dropedown.inputValue()).toBe('india');
    console.log( await dropedown.inputValue());

    //select by visible text
    await dropedown.selectOption({label:'Canada'});
    expect (await dropedown.inputValue()).toBe('canada');
    console.log( await dropedown.inputValue());

    //select by index
    await dropedown.selectOption({index:5});
    expect (await dropedown.inputValue()).toBe('australia');
    console.log( await dropedown.inputValue());
});