const { test, expect } = require('@playwright/test');

test('Page header should be "privacy policy"', async ({ page }) => {
  await page.goto('localhost:3000/privacy.html');
  const header = await page.$eval('h1', h1 => h1.innerText);
  expect(header).toBe('Privacy Policy');
});
