import { test as base } from "@playwright/test";
import { OurVisionPage } from "../page-objects/our-vision-page";
import { RootPage } from "../page-objects/root-page";
import { HeaderPage } from "../page-objects/header-page";
import { FooterPage } from "../page-objects/footer-page";
import { WhatsCookingPage } from "../page-objects/WhatsCooking/whats-cooking-page";

export const ourVisionTest = base.extend<{
  ourVisionPage: OurVisionPage;
  rootPage: RootPage;
  headerPage: HeaderPage;
  whatsCookingPage: WhatsCookingPage;
  footerPage: FooterPage;
}>({
  ourVisionPage: async ({ page }, use) => await use(new OurVisionPage(page)),
  rootPage: async ({ page }, use) => await use(new RootPage(page)),
  headerPage: async ({ page }, use) => await use(new HeaderPage(page)),
  footerPage: async ({ page }, use) => await use(new FooterPage(page)),
  whatsCookingPage: async ({ page }, use) =>
    await use(new WhatsCookingPage(page)),
});
