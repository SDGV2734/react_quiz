import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // Navigate to our app instead of playwright.dev
  await page.goto("http://localhost:5173");

  // Expect title to contain "Quiz" or similar
  await expect(page).toHaveTitle(/Quiz|React/);
});

test("get started link", async ({ page }) => {
  // Navigate to our app
  await page.goto("http://localhost:5173");

  // Click the "Start Quiz" button instead
  await page.getByText("Start Quiz").click();

  // Expect question card to be visible
  await expect(page.locator('[data-testid="question-card"]')).toBeVisible();
});
