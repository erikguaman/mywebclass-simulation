import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  const privacyPolicyAgreed = await page.evaluate(() => {
    return localStorage.getItem('privacyPolicyAgreed')
  })

  expect(privacyPolicyAgreed).not.toBeNull()
  await page.getByRole('link', { name: 'Content Template' }).click()
  await page.getByRole('link', { name: 'Section 4' }).click()
})
