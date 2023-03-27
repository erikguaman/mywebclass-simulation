import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  const picture = await page.$('img');
  const pictureStyle = await picture.evaluate((node) => window.getComputedStyle(node));
  expect(pictureStyle.float).toBe('right');
});