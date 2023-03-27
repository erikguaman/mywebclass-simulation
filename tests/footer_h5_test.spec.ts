const { test, expect } = require('@playwright/test');

test('All h5 elements in footer match HTML text', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Find all h5 elements in the footer
  const footerH5s = await page.$$('footer h5');

  // Check that each h5 element's text matches the expected text in the HTML
  for (const h5 of footerH5s) {
    const expectedText = await h5.evaluate(el => el.textContent.trim());
    const actualText = await h5.textContent();
    expect(actualText).toBe(expectedText);
  }
});
