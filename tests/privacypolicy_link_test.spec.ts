const { test, expect } = require('@playwright/test');

test('Click Privacy Policy link leads to privacy.html', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  //await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.click('a[href="privacy.html"]');

  const currentUrl = page.url();
  const expectedUrl = 'http://localhost:3000/privacy.html';
  expect(currentUrl).toBe(expectedUrl);
});
