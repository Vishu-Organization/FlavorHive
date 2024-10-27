import { Page, expect } from "@playwright/test";

export class HomeBannerPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get homeBannerImg() {
    return this.page.getByTestId("img-home-banner");
  }

  get homeBannerImgSmall() {
    return this.page.getByTestId("img-home-banner-sm");
  }

  get homeBannerSavingsInfoText() {
    return this.page.getByTestId("text-home-banner-savings-info");
  }

  get seePlansBtn() {
    return this.page.getByTestId("btn-home-banner-see-plans");
  }

  async verifyBannerImg(width: number) {
    if (width === 640) {
      await expect(this.homeBannerImgSmall).toBeVisible();
      await expect(this.homeBannerImg).toBeHidden();
    } else {
      await expect(this.homeBannerImg).toBeVisible();
      await expect(this.homeBannerImgSmall).toBeHidden();
    }
  }

  async verifyBannerDetails() {
    await expect(this.homeBannerSavingsInfoText).toContainText(
      "Save up to $4 per serving",
    );
    await expect(this.seePlansBtn).toBeVisible();
  }
}
