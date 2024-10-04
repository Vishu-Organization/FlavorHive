import { test as base } from "@playwright/test";
import { OurVisionPage } from "../page-objects/our-vision-page";
import { RootPage } from "../page-objects/root-page";

export const ourVisionTest = base.extend<{
  ourVisionPage: OurVisionPage;
  rootPage: RootPage;
}>({
  ourVisionPage: async ({ page }, use) => {
    await use(new OurVisionPage(page));
  },
  rootPage: async ({ page }, use) => {
    await use(new RootPage(page));
  },
});
