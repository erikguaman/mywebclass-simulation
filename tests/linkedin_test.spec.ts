import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
 	await page.goto('http://localhost:3000/');
 	await page.getByRole('button', { name: 'Agree', exact: true }).click();
 	await page.getByRole('link', { name: 'MyWebClass' }).click();
 	await page.getByRole('button', { name: 'Begin Here' }).click();
 	await page.goto('http://localhost:3000/');
 	await page.getByRole('link', { name: '' }).click();
const currentUrl = page.url();
 	const originalUrl = 'http://localhost:3000/';
 	expect(currentUrl).toBe(originalUrl); });

