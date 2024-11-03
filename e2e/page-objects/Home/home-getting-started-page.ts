import { Page, expect } from "@playwright/test";

export class HomeGettingStartedPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get gettingStartedImg() {
    return this.page.getByTestId("img-home-getting-started");
  }

  get pricePerServingInfoText() {
    return this.page.getByTestId("text-home-getting-started-price-per-serving");
  }

  get seePlansBtn() {
    return this.page.getByTestId("btn-home-getting-started-see-plans");
  }

  async verifyGettingStartedDetails() {
    await expect(this.gettingStartedImg).toBeVisible();
    await expect(this.pricePerServingInfoText).toContainText(
      "$7.99 per serving",
    );
    await expect(this.seePlansBtn).toBeVisible();
  }
}
