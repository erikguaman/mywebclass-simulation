const { test, expect } = require('@playwright/test');

test('Image width is 720', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const image = await page.$('img');

  const width = await image.getAttribute('width');
  expect(width).toBe('720');
});
