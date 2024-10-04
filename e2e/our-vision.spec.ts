import { ourVisionTest } from "./fixtures/our-vision";

ourVisionTest(
  "Should navigate to our-vision screen and check the details",
  async ({ ourVisionPage, rootPage }) => {
    await rootPage.gotoRootRoute();
    await rootPage.verifyPageTitile();
    await ourVisionPage.navigateToOurVisionScreen();
    await ourVisionPage.verifyOurVisionPageContent();
    await ourVisionPage.verifyYouTubeVideo();
  },
);
