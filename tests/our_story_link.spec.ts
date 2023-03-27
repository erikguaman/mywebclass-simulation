import { test, expect } from '@playwright/test';

test('After clicking on Our story, it should lead to story', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  await page.getByRole('link', { name: 'Our Story' }).click();

  const currentUrl = page.url();
  const expectedUrl = 'http://localhost:3000/story.html';
  expect(currentUrl).toBe(expectedUrl);
});