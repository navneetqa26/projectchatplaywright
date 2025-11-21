import { test, expect } from '@playwright/test';

// ------------------- Positive Login -------------------
test('Valid Login Test', async ({ page }) => {
  await page.goto('https://dev.projectchat.ai/auth/signin');

  await page.getByRole('textbox', { name: 'Email' }).fill('navneet26oct@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.getByText('Welcome NewUserss !')).toBeVisible();
});


// ------------------- Negative Login -------------------
test('Invalid Login Test', async ({ page }) => {
  await page.goto('https://dev.projectchat.ai/auth/signin');

  await page.getByRole('textbox', { name: 'Email' }).fill('navneet26@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});