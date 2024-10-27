import { Page, expect } from "@playwright/test";

export class HomeHeroPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get homeHeroImg() {
    return this.page.getByTestId("img-home-hero");
  }

  get homeHeroImgSmall() {
    return this.page.getByTestId("img-home-hero-sm");
  }

  get homeHeroText() {
    return this.page.getByTestId("text-home-hero");
  }

  get seePlansBtn() {
    return this.page.getByTestId("btn-home-hero-see-plans");
  }

  async verifyHeroImg(width: number) {
    if (width === 640) {
      await expect(this.homeHeroImgSmall).toBeVisible();
      await expect(this.homeHeroImg).toBeHidden();
    } else {
      await expect(this.homeHeroImg).toBeVisible();
      await expect(this.homeHeroImgSmall).toBeHidden();
    }
  }

  async verifyHeroDetails() {
    await expect(this.homeHeroText).toContainText("Easy meal kits");
    await expect(this.seePlansBtn).toBeVisible();
  }
}
