import { Page, expect } from "@playwright/test";

export class RootPage {
  rootRoute: string;
  env = process.env?.APP_ENV;

  constructor(private page: Page) {
    this.page = page;
    this.rootRoute =
      this.env === "local"
        ? `http://localhost:5173/`
        : `https://flavor-hive.netlify.app/`;
  }

  async gotoRootRoute() {
    await this.page.goto(this.rootRoute);
  }

  async verifyPageTitile() {
    await expect(this.page).toHaveTitle(/Flavor Hive/);
  }
}
