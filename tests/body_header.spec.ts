const { test, expect } = require('@playwright/test');

test('The body header should say: Renew your teaching techniques', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Replace with the actual website URL
  const header = await page.$('h1');
  const headerText = await header.innerText();
  expect(headerText).toBe('Renew your teaching techniques');
});
