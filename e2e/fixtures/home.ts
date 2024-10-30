import { test as base } from "@playwright/test";
import { HeaderPage } from "../page-objects/header-page";
import { HomeHeroPage } from "../page-objects/Home/home-hero-page";
import { HomeBannerPage } from "../page-objects/Home/home-banner-page";
import { RootPage } from "../page-objects/root-page";
import { OurVisionPage } from "../page-objects/our-vision-page";
import { LoginPage } from "../page-objects/login-page";

export const homeTest = base.extend<{
  rootPage: RootPage;
  ourVisionPage: OurVisionPage;
  loginPage: LoginPage;
  headerPage: HeaderPage;
  homeHeroPage: HomeHeroPage;
  homeBannerPage: HomeBannerPage;
}>({
  rootPage: async ({ page }, use) => await use(new RootPage(page)),
  ourVisionPage: async ({ page }, use) => await use(new OurVisionPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  headerPage: async ({ page }, use) => await use(new HeaderPage(page)),
  homeHeroPage: async ({ page }, use) => await use(new HomeHeroPage(page)),
  homeBannerPage: async ({ page }, use) => await use(new HomeBannerPage(page)),
});