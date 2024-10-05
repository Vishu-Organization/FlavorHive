import { ourVisionTest } from "./fixtures/our-vision";
import { verifyRootPage } from "./helper-functions";
import { OurVisionPage } from "./page-objects/our-vision-page";

const verifyOurVisionPage = async (ourVisionPage: OurVisionPage) => {
  await ourVisionPage.verifyOurVisionPageContent();
  await ourVisionPage.verifyYouTubeVideo();
};

ourVisionTest(
  "Should navigate to our-vision screen from the header and check the details",
  async ({ ourVisionPage, rootPage, headerPage }) => {
    await verifyRootPage(rootPage);
    await headerPage.navigateToOurVisionScreen();
    await verifyOurVisionPage(ourVisionPage);
  },
);

ourVisionTest(
  "Should navigate to our-vision screen from the footer and check the details",
  async ({ ourVisionPage, rootPage, footerPage }) => {
    await verifyRootPage(rootPage);
    await footerPage.goToOurVision();
    await verifyOurVisionPage(ourVisionPage);
  },
);
