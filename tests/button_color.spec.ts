import { test, expect } from '@playwright/test';

test('Button should be the color green', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  const button = await page.$('.btn-success');
  const buttonStyle = await button.evaluate((node) => window.getComputedStyle(node));
  expect(buttonStyle.backgroundColor).toBe('rgb(25, 135, 84)');
});