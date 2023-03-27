const { test, expect } = require('@playwright/test');

test('Verify toggle creation at 1000px width', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Replace with the actual website URL
  const initialViewportSize = page.viewportSize();

  await page.setViewportSize({ width: 1000, height: initialViewportSize.height });

  const toggleExists = await page.$('.navbar-toggler') !== null;
  expect(toggleExists).toBeTruthy();

  await page.setViewportSize(initialViewportSize);
});
