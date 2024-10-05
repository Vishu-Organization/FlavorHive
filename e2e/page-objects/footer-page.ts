import { Page } from "@playwright/test";

export class FooterPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get ourVisionLink() {
    return this.page.getByTestId("footer-our-vision");
  }

  get onTheMenuLink() {
    return this.page.getByTestId("footer-on-the-menu");
  }

  async goToOnTheMenu() {
    await this.onTheMenuLink.click();
  }

  async goToOurVision() {
    await this.ourVisionLink.click();
  }
}
