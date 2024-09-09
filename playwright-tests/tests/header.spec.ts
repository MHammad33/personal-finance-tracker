import { test, expect } from "@playwright/test";

test.describe("Header Component", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173");
	});

	test("Initial state of the header", async ({ page }) => {
		const header = page.locator("header");
		await expect(header).toBeVisible();

		const title = page.locator("header >> text=Finance Tracker");
		await expect(title).toBeVisible();

		const darkModeToggle = page.locator(
			'button[aria-label="Toggle Dark Mode"]'
		);
		await expect(darkModeToggle).toBeVisible();
	});

	test("Mobile menu toggles correctly", async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		const menu = page.locator("nav");
		await expect(menu).toHaveClass(/hidden/);

		const toggleButton = page.locator('button[aria-label="Toggle Menu"]');
		await toggleButton.click();
		await expect(menu).toBeVisible();

		await expect(menu).toHaveClass(/transition-all/);

		await toggleButton.click();
		await expect(menu).toHaveClass(/hidden/);
	});

	test("Dark mode toggles correctly", async ({ page }) => {
		const darkModeToggle = page.locator(
			'button[aria-label="Toggle Dark Mode"]'
		);
		const body = page.locator("html");

		await expect(body).not.toHaveClass(/dark/);

		await darkModeToggle.click();
		await expect(body).toHaveClass(/dark/);

		await darkModeToggle.click();
		await expect(body).not.toHaveClass(/dark/);
	});

	test("Logged-out state shows SIgn in and Register links", async ({
		page,
	}) => {
		await page.goto("http://localhost:5173/");
		const loginLink = page.getByRole("link", { name: /sign in/i });
		await expect(loginLink).toBeVisible();

		const signupLink = page.getByRole("link", { name: /register/i });
		await expect(signupLink).toBeVisible();

		const profileButton = page.locator('button[aria-label="User Profile"]');
		await expect(profileButton).not.toBeVisible();
	});

	test("Navigation links work correctly", async ({ page }) => {
		await page.goto("http://localhost:5173/");
		const homeLink = page.getByRole("link", { name: /home/i });
		await homeLink.click();
		await expect(page).toHaveURL("http://localhost:5173/");

		const aboutLink = page.getByRole("link", { name: /about/i });
		await aboutLink.click();
		await expect(page).toHaveURL("http://localhost:5173/about");

		const expensesLink = page.getByRole("link", { name: /expenses/i });
		await expensesLink.click();
		await expect(page).toHaveURL("http://localhost:5173/expenses");
	});
});
