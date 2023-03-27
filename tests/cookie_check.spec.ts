const { test, expect } = require('@playwright/test');

test('Page should have a section header for cookies and web beacons', async ({ page }) => {
  await page.goto('localhost:3000/privacy.html');
  const header = await page.$eval('h3', h3 => h3.innerText);
  expect(header).toBe('Cookies and Web Beacons');
});
