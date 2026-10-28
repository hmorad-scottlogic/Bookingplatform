import { test, expect } from '@playwright/test';
import { LoginPage } from './bowls-helper-page';

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

test('check sign in', async ({ page }) => {
  const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.signIn('hameed@bowls.com', 'hameed');

    await expect(page).toHaveURL('http://localhost:3000/dashboard');
    await expect(page.getByText('Lakeview Bowls Club', {exact:true}));
});

test('check booking', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.signIn('hameed@bowls.com', 'hameed');
    
    await page.getByRole('link', {name: 'Book Now'}).click();
    await page.getByLabel('Book Rink 7 at 17:00').click();
    await page.getByRole('button', {name: 'Request Booking'}).click();

    await expect(page.getByText('Booking requested for you successfully!', {exact:true}));

});
