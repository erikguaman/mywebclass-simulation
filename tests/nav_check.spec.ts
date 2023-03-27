const { test, expect } = require('@playwright/test');

test('Page should have a section header for navigation', async ({ page }) => {
  await page.goto('localhost:3000/privacy.html');
  const header = await page.$eval('h2', h2 => h2.innerText);
  expect(header).toBe('Navigation');
});
