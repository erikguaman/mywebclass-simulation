import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  const navigationColor = await page.$eval('.navbar', el => getComputedStyle(el).backgroundColor);
  expect(navigationColor).toBe('rgb(186, 131, 0)');
});