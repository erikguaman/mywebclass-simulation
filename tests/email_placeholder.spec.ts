import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  const placeholder = await page.$eval('#newsletter1', (el) => el.placeholder);
  expect(placeholder).toEqual('Email address');
});