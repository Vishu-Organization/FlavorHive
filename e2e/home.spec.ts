import { homeTest } from "./fixtures/home";
import { verifyRootPage, verifyWhatsCookingPage } from "./helper-functions";
import { HomeGettingStartedPage } from "./page-objects/Home/getting-started-page";
import { HomeBannerPage } from "./page-objects/Home/home-banner-page";
import { HomeHeroPage } from "./page-objects/Home/home-hero-page";
import { HomeTestimonialsPage } from "./page-objects/Home/testimonials-page";

const verifyHomePage = async (
  homeHeroPage: HomeHeroPage,
  homeBannerPage: HomeBannerPage,
  homeTestimonialsPage: HomeTestimonialsPage,
  homeGettingStartedPage: HomeGettingStartedPage,
  width: number,
) => {
  await homeHeroPage.verifyHeroImg(width);
  await homeHeroPage.verifyHeroDetails();
  await homeBannerPage.verifyBannerImg(width);
  await homeBannerPage.verifyBannerDetails();
  await homeTestimonialsPage.verifyTestimonialsDetails();
  await homeGettingStartedPage.verifyGettingStartedDetails();
};

homeTest(
  "Verify details on Home Screen",
  async ({
    rootPage,
    homeHeroPage,
    homeBannerPage,
    homeGettingStartedPage,
    homeTestimonialsPage,
    whatsCookingPage,
    viewport,
    browserName,
  }) => {
    await verifyRootPage(rootPage);
    await verifyHomePage(
      homeHeroPage,
      homeBannerPage,
      homeTestimonialsPage,
      homeGettingStartedPage,
      viewport?.width!,
    );
    await verifyWhatsCookingPage(
      whatsCookingPage,
      viewport?.width!,
      browserName,
    );
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
    homeTestimonialsPage,
    homeGettingStartedPage,
    whatsCookingPage,
    viewport,
    browserName,
  }) => {
    await verifyRootPage(rootPage);
    await headerPage.goToLoginScreen();
    await loginPage.verifyNavigationToLoginScreen();
    await headerPage.navigateToOurVisionScreen();
    await ourVisionPage.verifyOurVisionPageContent();
    await headerPage.goToHomeScreen();
    await verifyHomePage(
      homeHeroPage,
      homeBannerPage,
      homeTestimonialsPage,
      homeGettingStartedPage,
      viewport?.width!,
    );
    await verifyWhatsCookingPage(
      whatsCookingPage,
      viewport?.width!,
      browserName,
    );
  },
);
    