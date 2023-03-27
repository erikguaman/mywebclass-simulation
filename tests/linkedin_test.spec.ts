const { test, expect } = require('@playwright/test');

test('Click LinkedIn button leads to current page', async ({ page }) => {
  // Navigate to the current page
  await page.goto('http://localhost:3000/');

  // Click the LinkedIn button
  const linkedinButton = await page.$('.bi bi-linkedin');
  await linkedinButton.click();

  // Wait for the navigation to complete
  await page.waitForNavigation();

  // Verify that the current URL is the same as the original URL
  const currentUrl = page.url();
  const originalUrl = 'http://localhost:3000/';
  expect(currentUrl).toBe(originalUrl);
});
