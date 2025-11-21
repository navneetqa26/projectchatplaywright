import { test, expect } from '@playwright/test';

test('Workspace Creation', async ({ page }) => {

    //Login Check
  await page.goto('https://dev.projectchat.ai/auth/signin');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('navneet26oct@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'logo' })).toBeVisible();

    //Workspace Creation Check
  await page.getByRole('button', { name: ' Add a Workspace' }).click();
  await expect(page.getByRole('heading', { name: 'Add a Workspace' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a name' }).click();
  await page.getByRole('textbox', { name: 'Enter a name' }).fill('My Workspace');
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).click();
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).fill('This is description');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.goto('https://dev.projectchat.ai/project-space/b28349be-c074-4101-840b-9e26673731c0/details');
  await expect(page.getByText('My Workspace', { exact: true })).toBeVisible();
  await expect(page.getByText('This is description')).toBeVisible();
});

test('Duplicate Workspace Check', async ({ page }) => {

  // Login
  await page.goto('https://dev.projectchat.ai/auth/signin');
  await page.getByRole('textbox', { name: 'Email' }).fill('navneet26oct@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Add Workspace attempt
  await page.getByRole('button', { name: 'Add a Workspace' }).click();
  await page.getByRole('textbox', { name: 'Enter a name' }).fill('test');
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).fill('tests');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // Check error message
  await expect(page.getByText(/name already exists/i)).toBeVisible();
});


test('Workspace Creation and Edit Test', async ({ page }) => {

    //Login Test
  await page.goto('https://dev.projectchat.ai/auth/signin');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('navneet26oct@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Welcome NewUserss !')).toBeVisible();
    //Workspace Creation and Edit Test
  await page.getByRole('button', { name: ' Add a Workspace' }).click();
  await page.getByRole('textbox', { name: 'Enter a name' }).click();
  await page.getByRole('textbox', { name: 'Enter a name' }).fill('Hello worlddd');
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).click();
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).fill('This is description');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(page.getByText('Workspace created successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('heading', { name: 'Edit Workspace' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a name for your' }).click();
  await page.getByRole('textbox', { name: 'Enter a name for your' }).fill('Hello world Programes');
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).click();
  await page.getByRole('textbox', { name: 'Describe what this Workspace' }).fill('This is description of the text');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Workspace updated successfully')).toBeVisible();
});

// tests/workspace.spec.js
