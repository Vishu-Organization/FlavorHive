import { test as base } from "@playwright/test";
import { SignupPage } from "../page-objects/signup-page";
import { RootPage } from "../page-objects/root-page";

export const signupTest = base.extend<{
  signupPage: SignupPage;
  rootPage: RootPage;
}>({
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  rootPage: async ({ page }, use) => {
    await use(new RootPage(page));
  },
});
