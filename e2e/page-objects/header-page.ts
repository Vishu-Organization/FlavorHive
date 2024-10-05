import { Page } from "@playwright/test";

export class HeaderPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get ourVisionLink() {
    return this.page.getByTestId("header-our-vision");
  }

  get onTheMenuLink() {
    return this.page.getByTestId("header-on-the-menu");
  }

  async navigateToOurVisionScreen() {
    await this.ourVisionLink.click();
  }

  async goToOnTheMenuScreen() {
    await this.onTheMenuLink.click();
  }
}
