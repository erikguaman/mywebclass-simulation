const { test, expect } = require('@playwright/test');

test('Clicking "Content Template" link takes user to content.html', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  //await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.click('a[href="content.html"]');

  const currentUrl = page.url();
  const expectedUrl = 'http://localhost:3000/content.html';
  expect(currentUrl).toBe(expectedUrl);
});
