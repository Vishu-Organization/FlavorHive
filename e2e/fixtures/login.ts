import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";
import { SignupPage } from "../page-objects/signup-page";
import { RootPage } from "../page-objects/root-page";
import { HeaderPage } from "../page-objects/header-page";

export const loginTest = base.extend<{
  loginPage: LoginPage;
  signupPage: SignupPage;
  rootPage: RootPage;
  headerPage: HeaderPage;
}>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  signupPage: async ({ page }, use) => await use(new SignupPage(page)),
  rootPage: async ({ page }, use) => await use(new RootPage(page)),
  headerPage: async ({ page }, use) => await use(new HeaderPage(page)),
});
