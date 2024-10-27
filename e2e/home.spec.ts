import { homeTest } from "./fixtures/home";
import { verifyRootPage } from "./helper-functions";
import { HomeBannerPage } from "./page-objects/Home/home-banner-page";
import { HomeHeroPage } from "./page-objects/Home/home-hero-page";

const verifyHomePage = async (
  homeHeroPage: HomeHeroPage,
  homeBannerPage: HomeBannerPage,
  width: number,
) => {
  await homeHeroPage.verifyHeroImg(width);
  await homeHeroPage.verifyHeroDetails();
  await homeBannerPage.verifyBannerImg(width);
  await homeBannerPage.verifyBannerDetails();
};

homeTest(
  "Verify details on Home Screen",
  async ({ rootPage, homeHeroPage, homeBannerPage, viewport }) => {
    await verifyRootPage(rootPage);
    await verifyHomePage(homeHeroPage, homeBannerPage, viewport?.width!);
  },
);

homeTest(
  "Navigate to Login Screen and then back to home screen and verify the details",
  async ({
    rootPage,
    headerPage,
    loginPage,
    ourVisionPage,
    homeHeroPage,
    homeBannerPage,
    viewport,
  }) => {
    await verifyRootPage(rootPage);
    await headerPage.goToLoginScreen();
    await loginPage.verifyNavigationToLoginScreen();
    await headerPage.navigateToOurVisionScreen();
    await ourVisionPage.verifyOurVisionPageContent();
    await headerPage.goToHomeScreen();
    await verifyHomePage(homeHeroPage, homeBannerPage, viewport?.width!);
  },
);
