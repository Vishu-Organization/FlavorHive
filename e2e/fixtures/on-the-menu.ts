import { test as base } from "@playwright/test";
import { RootPage } from "../page-objects/root-page";
import { OnTheMenuPage } from "../page-objects/on-the-menu-page";
import { HeaderPage } from "../page-objects/header-page";
import { FooterPage } from "../page-objects/footer-page";

export const onTheMenuTest = base.extend<{
  rootPage: RootPage;
  onTheMenuPage: OnTheMenuPage;
  headerPage: HeaderPage;
  footerPage: FooterPage;
}>({
  rootPage: async ({ page }, use) => await use(new RootPage(page)),
  onTheMenuPage: async ({ page }, use) => await use(new OnTheMenuPage(page)),
  headerPage: async ({ page }, use) => await use(new HeaderPage(page)),
  footerPage: async ({ page }, use) => await use(new FooterPage(page)),
});
