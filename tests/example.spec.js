import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kilo.ai/worst-site/gallery');
  await page.getByRole('textbox', { name: 'Search sites...' }).click();
  await page.getByRole('textbox', { name: 'Search sites...' }).fill('super-seal');
  await page.getByRole('button', { name: 'Vote' }).click();
  await page.getByRole('textbox', { name: 'Search sites...' }).click();
  await page.getByRole('textbox', { name: 'Search sites...' }).fill('cubic-moss');
  await page.getByRole('button', { name: 'Vote' }).click();
  await page.getByRole('textbox', { name: 'Search sites...' }).click();
  await page.getByRole('textbox', { name: 'Search sites...' }).fill('snowy-wave');
  await page.getByRole('button', { name: 'Vote' }).click();
});