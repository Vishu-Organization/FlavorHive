import { RootPage } from "./page-objects/root-page";

export const verifyRootPage = async (rootPage: RootPage) => {
  await rootPage.gotoRootRoute();
  await rootPage.verifyPageTitile();
};
