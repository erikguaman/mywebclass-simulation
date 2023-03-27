const { test, expect } = require('@playwright/test');

test('Page should have a section header for data security', async ({ page }) => {
  await page.goto('localhost:3000/privacy.html');
  const header = await page.$eval('h4', h4 => h4.innerText);
  expect(header).toBe('Data Security');
});
