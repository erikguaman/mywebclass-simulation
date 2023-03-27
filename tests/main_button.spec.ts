const { test, expect } = require('@playwright/test');

test('Button should say Begin Here', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const button = await page.$('main button');
  const buttonText = await button.innerText();
  expect(buttonText).toBe('Begin Here');
});
