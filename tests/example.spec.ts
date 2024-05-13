import { test, expect } from '@playwright/test';

test('should navigate to the posts page', async ({ page }) => {
  await page.goto('http://localhost:3000/posts')
  await page.click('text=Blog posts')

  await expect(page).toHaveURL('http://localhost:3000/posts')
  await expect(page.locator('h1')).toContainText('Blog posts')
})