import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Club Management Platform/);
});



test('check Register page', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.getByRole('link', {name: 'Register'}).click();

    await expect(page).toHaveURL('http://localhost:3000/auth/register');
    await expect(page.getByText('Register', {exact:true}));

});

test.only('check sign in', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', {name: 'Sign in'}).click();
    await page.getByRole('textbox', {name: 'email'}).fill('hameed@bowls.com');
    await page.getByRole('textbox', {name: 'password'}).fill('hameed');
    await page.getByRole('button', {name: 'Sign In'}).click();

    await expect(page).toHaveURL('http://localhost:3000/dashboard');
    await expect(page.getByText('Lakeview Bowls Club', {exact:true}));
});


