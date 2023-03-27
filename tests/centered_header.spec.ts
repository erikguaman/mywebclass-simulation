const { test, expect } = require('@playwright/test');

test('header title should be centered at 1000px', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.setViewportSize({ width: 1000, height: 800 });
  const header = await page.$('header');
  const title = await header.$('a.navbar-brand');
  const titleStyle = await title.evaluate((node) => window.getComputedStyle(node));
  expect(titleStyle.textAlign).toBe('start');
});
