import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const headerTitle = await page.innerText('.navbar-brand');
  expect(headerTitle).toBe('MyWebClass');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  //await page.getByRole('link', { name: 'MyWebClass' }).click();
});